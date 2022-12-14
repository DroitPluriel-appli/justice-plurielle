import { fireEvent, screen, waitFor, within } from '@testing-library/react'
import mockRouter from 'next-router-mock'

import { fakeFrontDependencies, renderFakeComponent } from '../../configuration/testHelper'
import RenseignerUneAdresse from './RenseignerUneAdresse'
import { AdresseJson } from './useRenseignerUneAdresse'

describe('renseigner une adresse', () => {
  const { paths, wording } = fakeFrontDependencies

  it('affiche le titre de l’onglet', () => {
    // WHEN
    renderFakeComponent(<RenseignerUneAdresse />)

    // THEN
    expect(document.title).toBe(wording.TITLE_PAGE_RENSEIGNER_UNE_ADRESSE)
  })

  it('affiche le formulaire', () => {
    // WHEN
    renderFakeComponent(<RenseignerUneAdresse />)

    // THEN
    const retourAlAccueil = screen.getByRole('link', { name: wording.RETOUR_A_L_ACCUEIL })
    expect(retourAlAccueil).toHaveAttribute('href', paths.ACCUEIL)

    const formulaire = screen.getByRole('search')
    expect(formulaire).toHaveAttribute('action', paths.RECHERCHER_PAR_HANDICAP)
    const renseignerUneAdresse = within(formulaire).getByLabelText(wording.RENSEIGNER_UNE_ADRESSE)
    expect(renseignerUneAdresse).toBeInTheDocument()
    const input = within(formulaire).getByPlaceholderText(wording.RENSEIGNER_UNE_ADRESSE)
    expect(input).toBeInTheDocument()
    const effacerLAdresse = within(formulaire).getByRole('button', { name: wording.EFFACER_L_ADRESSE })
    expect(effacerLAdresse).toBeInTheDocument()
    const notice = screen.getByText(wording.NOTICE_DES_RESULTATS, { selector: 'span' })
    expect(notice).toBeInTheDocument()
    const validerLAdresse = within(formulaire).getByRole('button', { name: wording.VALIDER_L_ADRESSE })
    expect(validerLAdresse).toHaveAttribute('type', 'submit')
  })

  it('ne va pas à l’étape 2 si l’adresse est inconnue', async () => {
    // GIVEN
    const query = 'adresse inconnue'
    mockedFetch([])
    renderFakeComponent(<RenseignerUneAdresse />)
    const formulaire = screen.getByRole('search')
    const renseignerUneAdresse = within(formulaire).getByPlaceholderText(wording.RENSEIGNER_UNE_ADRESSE)
    const adresseInconnue = { target: { value: query } }
    fireEvent.change(renseignerUneAdresse, adresseInconnue)
    const validerLAdresse = within(formulaire).getByRole('button', { name: wording.VALIDER_L_ADRESSE })

    // WHEN
    fireEvent.click(validerLAdresse)

    // THEN
    await waitFor(() => {
      const url = new URL('https://api-adresse.data.gouv.fr/search/')
      url.searchParams.append('q', query)
      expect(global.fetch).toHaveBeenNthCalledWith(1, url)
    })
    expect(validerLAdresse).toBeDisabled()
  })

  it('affiche des résultats quand il y a au moins 4 caractères renseignés avec une latence de 500 ms', async () => {
    // GIVEN
    mockedFetch([
      {
        geometry: {
          coordinates: [
            5.36978,
            43.296482,
          ],
        },
        properties: { label: '34 avenue de lopera' },
      },
      {
        geometry: {
          coordinates: [
            6.36978,
            44.296482,
          ],
        },
        properties: { label: '34 bis avenue de lopera' },
      },
    ])
    renderFakeComponent(<RenseignerUneAdresse />)
    const formulaire = screen.getByRole('search')
    const renseignerUneAdresse = within(formulaire).getByPlaceholderText(wording.RENSEIGNER_UNE_ADRESSE)
    const adresse = { target: { value: '34 avenue de lopera' } }

    // WHEN
    fireEvent.change(renseignerUneAdresse, adresse)

    // THEN
    await waitFor(() => {
      const list = screen.getByRole('listbox')
      const resultats = within(list).getAllByRole('option')
      expect(resultats[0].textContent).toBe('34 avenue de lopera')
      // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
      expect(resultats[1].textContent).toBe('34 bis avenue de lopera')
    })
  })

  it('n’affiche pas de résultats quand il y a moins de 4 caractères renseignés', () => {
    // GIVEN
    renderFakeComponent(<RenseignerUneAdresse />)
    const formulaire = screen.getByRole('search')
    const renseignerUneAdresse = within(formulaire).getByPlaceholderText(wording.RENSEIGNER_UNE_ADRESSE)
    const adresse = { target: { value: '34' } }

    // WHEN
    fireEvent.change(renseignerUneAdresse, adresse)

    // THEN
    const list = screen.getByRole('listbox')
    const resultats = within(list).queryAllByRole('option')
    expect(resultats).toHaveLength(0)
  })

  it.each([
    ['touchStart'],
    ['click'],
  ])('efface l’adresse quand on %s sur le bouton et rend le formulaire non validable', async (event: string) => {
    // GIVEN
    mockedFetch([
      {
        geometry: {
          coordinates: [
            5.36978,
            43.296482,
          ],
        },
        properties: { label: '34 avenue de lopera' },
      },
    ])
    renderFakeComponent(<RenseignerUneAdresse />)
    const formulaire = screen.getByRole('search')
    const renseignerUneAdresse = within(formulaire).getByPlaceholderText(wording.RENSEIGNER_UNE_ADRESSE)
    const adresse = { target: { value: '34 avenue de lopera' } }
    fireEvent.change(renseignerUneAdresse, adresse)
    const list = screen.getByRole('listbox')
    await waitFor(() => {
      const resultats = within(list).getAllByRole('option')
      // eslint-disable-next-line testing-library/no-wait-for-side-effects
      fireEvent.click(resultats[0])
    })
    const effacerLAdresse = screen.getByRole('button', { name: wording.EFFACER_L_ADRESSE })

    // WHEN
    fireEvent[event as 'touchStart' | 'click'](effacerLAdresse)

    // THEN
    // const adresseEffacee = within(formulaire).getByPlaceholderText(wording.RENSEIGNER_UNE_ADRESSE)
    // expect(adresseEffacee).toHaveValue('')
    const validerLAdresse = within(formulaire).getByRole('button', { name: wording.VALIDER_L_ADRESSE })
    expect(validerLAdresse).toBeDisabled()
  })

  it.each([
    ['Space'],
    ['Enter'],
  ])('efface l’adresse quand on appuie sur le bouton avec la touche %s et rend le formulaire non validable', async (code: string) => {
    // GIVEN
    mockedFetch([
      {
        geometry: {
          coordinates: [
            5.36978,
            43.296482,
          ],
        },
        properties: { label: '34 avenue de lopera' },
      },
    ])
    renderFakeComponent(<RenseignerUneAdresse />)
    const formulaire = screen.getByRole('search')
    const renseignerUneAdresse = within(formulaire).getByPlaceholderText(wording.RENSEIGNER_UNE_ADRESSE)
    const adresse = { target: { value: '34 avenue de lopera' } }
    fireEvent.change(renseignerUneAdresse, adresse)
    const list = screen.getByRole('listbox')
    await waitFor(() => {
      const resultats = within(list).getAllByRole('option')
      // eslint-disable-next-line testing-library/no-wait-for-side-effects
      fireEvent.click(resultats[0])
    })
    const effacerLAdresse = screen.getByRole('button', { name: wording.EFFACER_L_ADRESSE })

    // WHEN
    fireEvent.keyDown(effacerLAdresse, { code })

    // THEN
    // const adresseEffacee = within(formulaire).getByPlaceholderText(wording.RENSEIGNER_UNE_ADRESSE)
    // expect(adresseEffacee).toHaveValue('')
    const validerLAdresse = within(formulaire).getByRole('button', { name: wording.VALIDER_L_ADRESSE })
    expect(validerLAdresse).toBeDisabled()
  })

  it('va à l’étape 2 quand je soumets le formulaire avec une adresse valide', async () => {
    // GIVEN
    mockedFetch([
      {
        geometry: {
          coordinates: [
            5.36978,
            43.296482,
          ],
        },
        properties: { label: '34 avenue de lopera' },
      },
    ])
    renderFakeComponent(<RenseignerUneAdresse />)
    const formulaire = screen.getByRole('search')
    const renseignerUneAdresse = within(formulaire).getByPlaceholderText(wording.RENSEIGNER_UNE_ADRESSE)
    const adresse = { target: { value: '34 a' } }
    fireEvent.change(renseignerUneAdresse, adresse)
    const list = screen.getByRole('listbox')
    await waitFor(() => {
      const resultats = within(list).getAllByRole('option')
      // eslint-disable-next-line testing-library/no-wait-for-side-effects
      fireEvent.click(resultats[0])
    })
    const validerLAdresse = within(formulaire).getByRole('button', { name: wording.VALIDER_L_ADRESSE })

    // WHEN
    fireEvent.click(validerLAdresse)

    // THEN
    await waitFor(() => {
      expect(mockRouter.asPath).toBe(`/${paths.RECHERCHER_PAR_HANDICAP}?lat=43.296482&lon=5.36978`)
    })
  })

  it('l’API adresse ne répond pas', async () => {
    // GIVEN
    jest.spyOn(global, 'fetch').mockRejectedValueOnce('API is down')
    renderFakeComponent(<RenseignerUneAdresse />)
    const formulaire = screen.getByRole('search')
    const renseignerUneAdresse = within(formulaire).getByPlaceholderText(wording.RENSEIGNER_UNE_ADRESSE)
    const adresse = { target: { value: '34 avenue de lopera' } }

    // WHEN
    fireEvent.change(renseignerUneAdresse, adresse)

    // THEN
    const list = screen.getByRole('listbox')
    await waitFor(() => {
      const resultats = within(list).getAllByRole('option')
      expect(resultats[0].textContent).toBe(wording.API_ADRESSE_NE_REPOND_PLUS)
    })
  })
})

function mockedFetch(adresses: AdresseJson[]) {
  // @ts-ignore
  jest.spyOn(global, 'fetch').mockResolvedValue({ json: () => Promise.resolve({ features: adresses }) })
}
