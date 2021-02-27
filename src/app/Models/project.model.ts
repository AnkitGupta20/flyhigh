import { ImageUrl } from "./image.model";
import { ProjectVariant } from "./Project-Variant.model";

export class Project {
    public ID!: number;
    public ProjectName!: string;
    public HomePageImage!: string
    public ProjectDetailImages!: ImageUrl[]
    public BuilderName!: string;
    public AboutBuilder!: string;
    public Area!: string;
    public City!: string;
    public PossessionDate!: string;
    public Status!: string;
    public LaunchDate!: string;
    public TotalApartments!: number;
    public NumberOfTowers!: number;
    public TotalArea!: string;
    public Construction!: string;
    public Variants!:ProjectVariant[];
    public IsAmentiesImage: boolean = false
    public AmentiesImageSrc!: string;
    public About!:string;
    public NumberOfUnits!:number;
    
}
