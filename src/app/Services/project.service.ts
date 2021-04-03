import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import { Project } from '../Models/project.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: Project[]= [
    {
      ID : 1,
      ProjectName: 'Signature Global Park',
      HomePageImage: 'assets/SG/home.png',
      ProjectDetailImages: [{imageUrl :'assets/SG/detail1.png', id:1, isActive:true },{imageUrl :'assets/SG/detail2.png', id:2, isActive:false },{imageUrl :'assets/SG/detail3.png', id:3, isActive:false },{imageUrl :'assets/SG/detail4.png', id:4, isActive:false },{imageUrl :'assets/SG/detail5.png', id:5, isActive:false },{imageUrl :'assets/SG/detail6.png', id:6, isActive:false },{imageUrl :'assets/SG/detail7.png', id:7, isActive:false },{imageUrl :'assets/SG/detail8.png', id:8, isActive:false },{imageUrl :'assets/SG/detail9.png', id:9, isActive:false },{imageUrl :'assets/SG/detail10.png', id:10, isActive:false },{imageUrl :'assets/SG/detail11.png', id:11, isActive:false },{imageUrl :'assets/SG/detail12.png', id:12, isActive:false },{imageUrl :'assets/SG/detail13.png', id:13, isActive:false },{imageUrl :'assets/SG/detail14.png', id:14, isActive:false }],
      BuilderName: 'Signature Global Builders',
      AboutBuilder: 'Pending',
      Area: 'Sector 36, ',
      City: 'Sohna South of Gurugram',
      PossessionDate: 'Aug 22',
      Status: 'Under Construction',
      LaunchDate: 'July 20',
      TotalApartments : 832,
      NumberOfTowers: 0,
      NumberOfUnits:832,
      TotalArea : '25 Acres',
      Construction: 'New',
      IsAmentiesImage:true,
      AmentiesImageSrc: "assets/SG/SGAmenties.png",
      About : "Founded by a set of seasoned professionals with an aim to amalgamate global standards and quality to Indian Real Estate industry. The Group showcases a profound experience of multiple decades in stock market and financial states sector. Signature Global Group’s promotes have diversified to leverage their expertise of customer delight and transparent ethics in to real estate. We at Signature Global Group aspire to deliver some of india’s most innovative real estate projects developed",
      Variants: [
        {
          ID: 1,
          Name: '2 BHK',
          MinCarpet : 951.43,
          MaxCarpet : 0,
          MinPrice: "46.8 L",
          MaxPrice: "49.51 L",
          IsSelected: true,
          CarpetOrSaleable: "Saleable Area",
          VariantType: [
            {
              VariantId: 1,
              VariantName : '2 BHK',
              CarpetArea: 951.43,
              FloorPlanImages: 'assets/SG/TypeB.png',
              Highlights: ['Low Density Project','Dedicated lift for 4 floors and Dedicated Parking','Swimming pool, Gazebo, Outdoor gym and Multi-purpose will be available ', 'Toddlers play area', 'Badminton court, Basketball court, Sculptor court and cricket net etc.'],
              Price: "46.8 L",
              Status: 'Under Construction',
              NumberOfBed : 2,
              NumberOfBathrooms: 2,
              NumberOfBalconies: 3,
              IsSelected : false,
              isReferenceArea: false,
              ReferenceArea: '',
              isBalconyArea: false,
              BalconyArea: ''
            }
          ]
        },

        {
          ID: 2,
          Name: '3 BHK',
          MinCarpet : 1081.7,
          MaxCarpet : 0,
          MinPrice: "52.9 L",
          MaxPrice: "55.9 L",
          IsSelected: false,
          CarpetOrSaleable: "Saleable",
          VariantType: [
            {
              VariantId: 1,
              VariantName : '3 BHK',
              CarpetArea: 1081.7,
              FloorPlanImages: 'assets/SG/TypeA.png',
              Highlights: ['Low Density Project','Dedicated lift for 4 floors and Dedicated Parking','Swimming pool, Gazebo, Outdoor gym and Multi-purpose will be available ', 'Toddlers play area', 'Badminton court, Basketball court, Sculptor court and cricket net etc.'],
              Price: "52.9 L" ,
              Status: 'Under Construction',
              NumberOfBed : 3,
              NumberOfBathrooms: 2,
              NumberOfBalconies: 4,
              IsSelected : false,
              isReferenceArea: false,
              ReferenceArea: '',
              isBalconyArea: false,
              BalconyArea: ''
            }
          ]
        }

      ]
    },


    {
      ID : 328,
      ProjectName: 'Mount Ville',
      HomePageImage: 'assets/MV/home.png',
      ProjectDetailImages: [{imageUrl :'assets/MV/detail1.png', id:1, isActive:true },{imageUrl :'assets/MV/detail2.png', id:2, isActive:false },{imageUrl :'assets/MV/detail3.png', id:3, isActive:false },{imageUrl :'assets/MV/detail4.png', id:4, isActive:false },{imageUrl :'assets/MV/detail5.png', id:5, isActive:false },{imageUrl :'assets/MV/detail6.png', id:6, isActive:false },{imageUrl :'assets/MV/detail7.png', id:7, isActive:false },{imageUrl :'assets/MV/detail8.png', id:8, isActive:false },{imageUrl :'assets/MV/detail9.png', id:9, isActive:false },{imageUrl :'assets/MV/detail10.png', id:10, isActive:false }],
      BuilderName: 'Mapsko',
      AboutBuilder: 'Pending',
      Area: 'Sector 79, ',
      City: 'Gurugram',
      PossessionDate: 'Ready',
      Status: 'Read to move',
      LaunchDate: 'Nov 20',
      TotalApartments : 0,
      NumberOfTowers: 8,
      NumberOfUnits:0,
      TotalArea : '16.369 Acres',
      Construction: 'New',
      IsAmentiesImage:false,
      AmentiesImageSrc: "",
      About : "Mapsko MountVille is an artistic representation customized for those who apprehend the merit of luxury and abundance of greenery. Nestled in sector-79, Gurugram, offering 3-4 BHK luxury apartments in gurgaon is a pure model of urban architecture, which is designed to perfection. Aravali is a quintessential complement to this wonderful project, which has been marvelously arranged by the World's leading landscape architects- LSG Inc, USA and structured by Shapoorji Pallonji.  ",
      Variants: [
        {
          ID: 1,
          Name: '3 BHK',
          MinCarpet : 1490,
          MaxCarpet : 1960,
          MinPrice: "86.52 L",
          MaxPrice: "1.20 Cr",
          IsSelected: true,
          CarpetOrSaleable: "Reference Area",
          
          VariantType: [
            {
              VariantId: 1,
              VariantName : '3 BHK',
              CarpetArea: 862.18,
              FloorPlanImages: 'assets/MV/1490n.jpg',
              Highlights: ['Double Height Stilt for more Greenery & Open Space','Exclusive Terrace Homes and Fully AC Apartments', '3 Lifts in Each Tower', 'Double Height AC Entrance Lobby on ground at every tower','Near 3 sprawling golf courses', 'Stylish Modular Wardrobe for Chic Robes', 'Exemplary Architecture by Hafeez Contractor', 'Modular Kitchen with Chimney & Gas Pipe Line', 'Attractive Location Feasibility'],
              Price: "86.5 L - 89.79 L",
              Status: 'Ready to move',
              NumberOfBed : 3,
              NumberOfBathrooms: 3,
              NumberOfBalconies: 2,
              IsSelected : false,
              isReferenceArea: true,
              ReferenceArea: '1490',
              isBalconyArea: true,
              BalconyArea: '136.48 - 141.54'
            }
            ,
            {
              VariantId: 3,
              VariantName : '3BHK',
              CarpetArea: 862.18,
              FloorPlanImages: 'assets/MV/1510.jpg',
              Highlights: ['Double Height Stilt for more Greenery & Open Space','Exclusive Terrace Homes and Fully AC Apartments', '3 Lifts in Each Tower', 'Double Height AC Entrance Lobby on ground at every tower','Near 3 sprawling golf courses', 'Stylish Modular Wardrobe for Chic Robes', 'Exemplary Architecture by Hafeez Contractor', 'Modular Kitchen with Chimney & Gas Pipe Line', 'Attractive Location Feasibility'],
              Price: "91.00 L",
              Status: 'Ready to move',
              NumberOfBed : 3,
              NumberOfBathrooms: 3,
              NumberOfBalconies: 2,
              IsSelected : false,
              isReferenceArea: true,
              ReferenceArea: '1510',
              isBalconyArea: true,
              BalconyArea: '158.87'
            },
            {
              VariantId: 2,
              VariantName : '3BHK + Terrace',
              CarpetArea: 862.18,
              FloorPlanImages: 'assets/MV/1620n.jpg',
              Highlights: ['Double Height Stilt for more Greenery & Open Space','Exclusive Terrace Homes and Fully AC Apartments', '3 Lifts in Each Tower', 'Double Height AC Entrance Lobby on ground at every tower','Near 3 sprawling golf courses', 'Stylish Modular Wardrobe for Chic Robes', 'Exemplary Architecture by Hafeez Contractor', 'Modular Kitchen with Chimney & Gas Pipe Line', 'Attractive Location Feasibility'],
              Price: "98.42 L- 1.26 Cr",
              Status: 'Ready to move',
              NumberOfBed : 3,
              NumberOfBathrooms: 3,
              NumberOfBalconies: 2,
              IsSelected : false,
              isReferenceArea: true,
              ReferenceArea: '1620',
              isBalconyArea: true,
              BalconyArea: '285.99'
            },
            {
              VariantId: 4,
              VariantName : '3 BHK + SR',
              CarpetArea: 1071.33,
              FloorPlanImages: 'assets/MV/1815.jpg',
              Highlights: ['Double Height Stilt for more Greenery & Open Space','Exclusive Terrace Homes and Fully AC Apartments', '3 Lifts in Each Tower', 'Double Height AC Entrance Lobby on ground at every tower','Near 3 sprawling golf courses', 'Stylish Modular Wardrobe for Chic Robes', 'Exemplary Architecture by Hafeez Contractor', 'Modular Kitchen with Chimney & Gas Pipe Line', 'Attractive Location Feasibility'],
              Price: "N/A",
              Status: 'Ready to move',
              NumberOfBed : 3,
              NumberOfBathrooms: 3,
              NumberOfBalconies: 3,
              IsSelected : false,
              isReferenceArea: true,
              ReferenceArea: '1815',
              isBalconyArea: true,
              BalconyArea: '167.27'
            },
            {
              VariantId: 5,
              VariantName : '3BHK + Terrace + SR',
              CarpetArea: 1074.23,
              FloorPlanImages: 'assets/MV/1960.jpg',
              Highlights: ['Double Height Stilt for more Greenery & Open Space','Exclusive Terrace Homes and Fully AC Apartments', '3 Lifts in Each Tower', 'Double Height AC Entrance Lobby on ground at every tower','Near 3 sprawling golf courses', 'Stylish Modular Wardrobe for Chic Robes', 'Exemplary Architecture by Hafeez Contractor', 'Modular Kitchen with Chimney & Gas Pipe Line', 'Attractive Location Feasibility'],
              Price: "1.25 Cr",
              Status: 'Ready to move',
              NumberOfBed : 3,
              NumberOfBathrooms: 3,
              NumberOfBalconies: 2,
              IsSelected : false,
              isReferenceArea: true,
              ReferenceArea: '1960',
              isBalconyArea: true,
              BalconyArea: '326.46'
            }
          ]
        },

        {
          ID: 2,
          Name: '4 BHK',
          MinCarpet : 1687.99,
          MaxCarpet : 0,
          MinPrice: "1.60 Cr",
          MaxPrice: "1.70 Cr",
          IsSelected: false,
          CarpetOrSaleable: "Reference Area",
          VariantType: [
            {
              VariantId: 1,
              VariantName : '4BHK + SR',
              CarpetArea: 1687.99,
              FloorPlanImages: 'assets/MV/2650n.jpg',
              Highlights: ['Double Height Stilt for more Greenery & Open Space','Exclusive Terrace Homes and Fully AC Apartments', '3 Lifts in Each Tower', 'Double Height AC Entrance Lobby on ground at every tower','Near 3 sprawling golf courses', 'Stylish Modular Wardrobe for Chic Robes', 'Exemplary Architecture by Hafeez Contractor', 'Modular Kitchen with Chimney & Gas Pipe Line', 'Attractive Location Feasibility'],
              Price: "1.59 Cr",
              Status: 'Ready to move',
              NumberOfBed : 4,
              NumberOfBathrooms: 4,
              NumberOfBalconies: 4,
              IsSelected : false,
              isReferenceArea: true,
              ReferenceArea: '2650',
              isBalconyArea: true,
              BalconyArea: '276.74'
            },
            {
              VariantId: 2,
              VariantName : '4BHK + Terrace + SR',
              CarpetArea: 1687.99,
              FloorPlanImages: 'assets/MV/FloorPlan_2710.jpg',
              Highlights: ['Double Height Stilt for more Greenery & Open Space','Exclusive Terrace Homes and Fully AC Apartments', '3 Lifts in Each Tower', 'Double Height AC Entrance Lobby on ground at every tower','Near 3 sprawling golf courses', 'Stylish Modular Wardrobe for Chic Robes', 'Exemplary Architecture by Hafeez Contractor', 'Modular Kitchen with Chimney & Gas Pipe Line', 'Attractive Location Feasibility'],
              Price: "1.68 Cr",
              Status: 'Ready to move',
              NumberOfBed : 4,
              NumberOfBathrooms: 4,
              NumberOfBalconies: 3,
              IsSelected : false,
              isReferenceArea: true,
              ReferenceArea: '2710',
              isBalconyArea: true,
              BalconyArea: '350.36'
            }
          ]
        }

      ]
    }
  ];

  currentProject: Project = new Project();

  constructor() { }

  getallProjectsDetails(): Observable<Project[]> {
    return of(this.projects);
  }

  getProjectDetailsById(id: Number) : Observable<any> {
    const selectedProject =  this.projects.find((item) => item.ID === Number(id));
    return of(selectedProject);
  }
}
