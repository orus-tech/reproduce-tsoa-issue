import { Controller, Get, Route, Tags } from 'tsoa'

// with the controller as is, tsoa fails
// if you remove any item in the union type it succeeds

type LargeUnionType =
  { type: 'step-identify' }
  | { type: 'step-add-address' }
  | { type: 'step-verify-address' }
  | { type: 'step-add-naf-code' }
  | { type: 'step-verify-naf-code' }
  | { type: 'step-add-activity' }
  | { type: 'step-add-employee-count' }
  | { type: 'step-add-revenue' }
  | { type: 'step-add-occupation' }
  | { type: 'step-add-surface' }
  | { type: 'step-add-place-extra' }
  | { type: 'step-add-prevention-extra' }
  | { type: 'step-add-email' }

type LargeUnionTypeReference = LargeUnionType['type']

@Tags('Demo')
@Route('demo')
export class ConfigurationController extends Controller {
  @Get('demo')
  async myRoute (): Promise<LargeUnionTypeReference> {
    return 'step-identify'
  }
}
