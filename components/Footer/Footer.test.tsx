import { screen, within } from '@testing-library/react'

import { fakeFrontDependencies, renderFakeComponent } from '../../configuration/testHelper'
import Footer from './Footer'

describe('pied de page', () => {
  const { paths, wording } = fakeFrontDependencies

  it('affiche les liens', () => {
    // WHEN
    renderFakeComponent(<Footer />)

    // THEN
    const footer = screen.getByRole('contentinfo')
    const sections = within(footer).getAllByRole('region')

    const justicePlurielle = within(sections[0]).getByRole('banner')
    expect(justicePlurielle.textContent).toBe(wording.INFORMATIONS)

    const liensJusticePlurielle = within(sections[0]).getAllByRole('listitem')

    const rechercheLieuDeDroit = within(liensJusticePlurielle[0]).getByRole('link', { name: wording.RECHERCHER_UNE_CONSULTATION_JURIDIQUE })
    expect(rechercheLieuDeDroit).toHaveAttribute('href', paths.RECHERCHER_UNE_CONSULTATION_JURIDIQUE)

    const criteresDAccessibilite = within(liensJusticePlurielle[1]).getByRole('link', { name: wording.NOS_CRITERES_D_ACCESSIBILITE })
    expect(criteresDAccessibilite).toHaveAttribute('href', paths.NOS_CRITERES_D_ACCESSIBILITE)

    const politiqueGestionDesDonnees = within(liensJusticePlurielle[2]).getByRole('link', { name: wording.POLITIQUE_DE_GESTION_DES_DONNEES })
    expect(politiqueGestionDesDonnees).toHaveAttribute('href', paths.POLITIQUE_DE_GESTION_DES_DONNEES)

    const confidentialite_informations_personnelles = within(liensJusticePlurielle[3]).getByRole('link', { name: wording.FAQ })
    expect(confidentialite_informations_personnelles).toHaveAttribute('href', paths.FAQ)

    const mentionsLegales = within(liensJusticePlurielle[4]).getByRole('link', { name: wording.MENTIONS_LEGALES })
    expect(mentionsLegales).toHaveAttribute('href', paths.MENTIONS_LEGALES)

    const qualiteDeService = within(sections[1]).getByRole('banner')
    expect(qualiteDeService.textContent).toBe(wording.QUALITE_DE_SERVICE)
    const liensQualiteDeService = within(sections[1]).getAllByRole('listitem')
    expect(liensQualiteDeService[0].textContent).toBe(wording.ACCESSIBILITE)

    const copyright = within(footer).getByText(wording.COPYRIGHT, { selector: 'p' })
    expect(copyright).toBeInTheDocument()
  })
})
