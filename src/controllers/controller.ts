import { Controller, Get, Route, Tags } from 'tsoa'

export interface Option {
  id: string
  name: string
}

type LargeUnionType =
  { type: 'step-identify' }
  | { type: 'step-add-address', siret: null | string, address: null | string }
  | { type: 'step-verify-address', address: string }
  | { type: 'step-add-naf-code' }
  | { type: 'step-verify-naf-code', nafCode: null | string }
  | { type: 'step-add-activity', activities: Option[], activity: null | string }
  | { type: 'step-add-employee-count', employeeCountRanges: Option[], employeeCountRange: null | string }
  | { type: 'step-add-revenue', revenueRanges: Option[], revenueRange: null | string }
  | { type: 'step-add-occupation', occupationStatuses: Option[], occupationStatus: null | string }
  | { type: 'step-add-surface', surfaceRanges: Option[], surfaceRange: null | string }
  |
  {
    type: 'step-add-place-extra',
    incidentCountRanges: Option[],
    inHistoricalBuilding: null | boolean,
    closesLate: null | boolean,
    inCommercialComplex: null | boolean,
    incidentCountRange: null | string
  }
  | { type: 'step-add-prevention-extra', hasCheckout: null | boolean, hasAntiTheft: null | boolean, hasFirePrevention: null | boolean }
  | { type: 'step-add-email', email: null | string, hasAccepted: null | boolean }

type LargeUnionTypeReference = LargeUnionType['type']

@Tags('Demo')
@Route('demo')
export class ConfigurationController extends Controller {
  @Get('demo')
  async myRoute (): Promise<LargeUnionTypeReference> {
    return 'step-identify'
  }
}
