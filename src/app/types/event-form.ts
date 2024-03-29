export interface EventForm {
  labelText: string,
  type: string,
  id: string,
  attributeName: string,
  name: Required<string>,
  attributes: string[],
  errorsAttributes: string[] 
}