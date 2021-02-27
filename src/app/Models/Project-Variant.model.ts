import { ProjectVariantType } from "./Variant-type.model"

export class ProjectVariant {
    public ID!:Number
    public Name!:string
    public MinCarpet!:number
    public MaxCarpet!:number
    public MinPrice!:number
    public MaxPrice!:number
    public IsSelected!:boolean
    public VariantType!: ProjectVariantType[]
    public CarpetOrSaleable!: string
}