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
      HomePageImage: '/assets/SG/home.png',
      ProjectDetailImages: [{imageUrl :'/assets/SG/detail1.png', id:1, isActive:true },{imageUrl :'/assets/SG/detail2.png', id:2, isActive:false },{imageUrl :'/assets/SG/detail3.png', id:3, isActive:false },{imageUrl :'/assets/SG/detail4.png', id:4, isActive:false },{imageUrl :'/assets/SG/detail5.png', id:5, isActive:false },{imageUrl :'/assets/SG/detail6.png', id:6, isActive:false },{imageUrl :'/assets/SG/detail7.png', id:7, isActive:false },{imageUrl :'/assets/SG/detail8.png', id:8, isActive:false },{imageUrl :'/assets/SG/detail9.png', id:9, isActive:false },{imageUrl :'/assets/SG/detail10.png', id:10, isActive:false },{imageUrl :'/assets/SG/detail11.png', id:11, isActive:false },{imageUrl :'/assets/SG/detail12.png', id:12, isActive:false },{imageUrl :'/assets/SG/detail13.png', id:13, isActive:false },{imageUrl :'/assets/SG/detail14.png', id:14, isActive:false }],
      BuilderName: 'Signature Global Builders',
      AboutBuilder: 'Pending',
      Area: 'Sector 36, ',
      City: 'Sohna South of Gurugram',
      PossessionDate: 'Dec 24',
      Status: 'Launch',
      LaunchDate: 'Nov 20',
      TotalApartments : 100,
      NumberOfTowers: 0,
      NumberOfUnits:832,
      TotalArea : '25 Acres',
      Construction: 'New',
      IsAmentiesImage:true,
      AmentiesImageSrc: "../../assets/SG/SGAmenties.png",
      About : "Founded by a set of seasoned professionals with an aim to amalgamate global standards and quality to Indian Real Estate industry. The Group showcases a profound experience of multiple decades in stock market and financial states sector. Signature Global Group’s promotes have diversified to leverage their expertise of customer delight and transparent ethics in to real estate. We at Signature Global Group aspire to deliver some of india’s most innovative real estate projects developed",
      Variants: [
        {
          ID: 1,
          Name: '2 BHK',
          MinCarpet : 951.43,
          MaxCarpet : 0,
          MinPrice: 46.8,
          MaxPrice: 49.51,
          IsSelected: true,
          CarpetOrSaleable: "Saleable Area",
          VariantType: [
            {
              VariantId: 1,
              VariantName : '2 BHK',
              CarpetArea: 951.43,
              FloorPlanImages: '../assets/SG/TypeB.png',
              Highlights: ['Low Density Project','Dedicated lift for 4 floors and Dedicated Parking','Swimming pool, Gazebo, Outdoor gym and Multi-purpose will be available ', 'Toddlers play area', 'Badminton court, Basketball court, Sculptor court and cricket net etc.'],
              Price: 46.8,
              Status: 'Under Construction',
              NumberOfBed : 2,
              NumberOfBathrooms: 2,
              NumberOfBalconies: 1,
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
          MinPrice: 52.9,
          MaxPrice: 55.9,
          IsSelected: false,
          CarpetOrSaleable: "Saleable",
          VariantType: [
            {
              VariantId: 1,
              VariantName : '3 BHK',
              CarpetArea: 1081.7,
              FloorPlanImages: '../assets/SG/TypeA.png',
              Highlights: ['Low Density Project','Dedicated lift for 4 floors and Dedicated Parking','Swimming pool, Gazebo, Outdoor gym and Multi-purpose will be available ', 'Toddlers play area', 'Badminton court, Basketball court, Sculptor court and cricket net etc.'],
              Price: 52.9,
              Status: 'Under Construction',
              NumberOfBed : 3,
              NumberOfBathrooms: 2,
              NumberOfBalconies: 2,
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
      HomePageImage: '/assets/MV/home.png',
      ProjectDetailImages: [{imageUrl :'/assets/MV/detail1.png', id:1, isActive:true },{imageUrl :'/assets/MV/detail2.png', id:2, isActive:false },{imageUrl :'/assets/MV/detail3.png', id:3, isActive:false },{imageUrl :'/assets/MV/detail4.png', id:4, isActive:false },{imageUrl :'/assets/MV/detail5.png', id:5, isActive:false },{imageUrl :'/assets/MV/detail6.png', id:6, isActive:false },{imageUrl :'/assets/MV/detail7.png', id:7, isActive:false },{imageUrl :'/assets/MV/detail8.png', id:8, isActive:false },{imageUrl :'/assets/MV/detail9.png', id:9, isActive:false },{imageUrl :'/assets/MV/detail10.png', id:10, isActive:false }],
      BuilderName: 'Mapsko',
      AboutBuilder: 'Pending',
      Area: 'Sector 79, ',
      City: 'Gurugram',
      PossessionDate: 'Dec 24',
      Status: 'Launch',
      LaunchDate: 'Nov 20',
      TotalApartments : 0,
      NumberOfTowers: 0,
      NumberOfUnits:0,
      TotalArea : '25 Acres',
      Construction: 'New',
      IsAmentiesImage:false,
      AmentiesImageSrc: "../../assets/SG/SGAmenties.png",
      About : "Founded by a set of seasoned professionals with an aim to amalgamate global standards and quality to Indian Real Estate industry. The Group showcases a profound experience of multiple decades in stock market and financial states sector. Signature Global Group’s promotes have diversified to leverage their expertise of customer delight and transparent ethics in to real estate. We at Signature Global Group aspire to deliver some of india’s most innovative real estate projects developed",
      Variants: [
        {
          ID: 1,
          Name: '3 BHK',
          MinCarpet : 1490,
          MaxCarpet : 1960,
          MinPrice: 0,
          MaxPrice: 0,
          IsSelected: true,
          CarpetOrSaleable: "Reference Area",
          VariantType: [
            {
              VariantId: 1,
              VariantName : '3 BHK',
              CarpetArea: 862.18,
              FloorPlanImages: '../assets/MV/FloorPlan1.png',
              Highlights: ['Double Height Stilt for more Greenery & Open Space','Exclusive Terrace Homes and Fully AC Apartments', '3 Lifts in Each Tower', 'Double Height AC Entrance Lobby on ground at every tower','Near 3 sprawling golf courses', 'Stylish Modular Wardrobe for Chic Robes', 'Exemplary Architecture by Hafeez Contractor', 'Modular Kitchen with Chimney & Gas Pipe Line', 'Attractive Location Feasibility'],
              Price: 0,
              Status: 'Under Construction',
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
              FloorPlanImages: '../assets/MV/FloorPlan3.png',
              Highlights: ['Double Height Stilt for more Greenery & Open Space','Exclusive Terrace Homes and Fully AC Apartments', '3 Lifts in Each Tower', 'Double Height AC Entrance Lobby on ground at every tower','Near 3 sprawling golf courses', 'Stylish Modular Wardrobe for Chic Robes', 'Exemplary Architecture by Hafeez Contractor', 'Modular Kitchen with Chimney & Gas Pipe Line', 'Attractive Location Feasibility'],
              Price: 0,
              Status: 'Under Construction',
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
              FloorPlanImages: '../assets/MV/FloorPlan2.png',
              Highlights: ['Double Height Stilt for more Greenery & Open Space','Exclusive Terrace Homes and Fully AC Apartments', '3 Lifts in Each Tower', 'Double Height AC Entrance Lobby on ground at every tower','Near 3 sprawling golf courses', 'Stylish Modular Wardrobe for Chic Robes', 'Exemplary Architecture by Hafeez Contractor', 'Modular Kitchen with Chimney & Gas Pipe Line', 'Attractive Location Feasibility'],
              Price: 0,
              Status: 'Under Construction',
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
              FloorPlanImages: '../assets/MV/FloorPlan4.png',
              Highlights: ['Double Height Stilt for more Greenery & Open Space','Exclusive Terrace Homes and Fully AC Apartments', '3 Lifts in Each Tower', 'Double Height AC Entrance Lobby on ground at every tower','Near 3 sprawling golf courses', 'Stylish Modular Wardrobe for Chic Robes', 'Exemplary Architecture by Hafeez Contractor', 'Modular Kitchen with Chimney & Gas Pipe Line', 'Attractive Location Feasibility'],
              Price: 0,
              Status: 'Under Construction',
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
              FloorPlanImages: '../assets/MV/FloorPlan5.png',
              Highlights: ['Double Height Stilt for more Greenery & Open Space','Exclusive Terrace Homes and Fully AC Apartments', '3 Lifts in Each Tower', 'Double Height AC Entrance Lobby on ground at every tower','Near 3 sprawling golf courses', 'Stylish Modular Wardrobe for Chic Robes', 'Exemplary Architecture by Hafeez Contractor', 'Modular Kitchen with Chimney & Gas Pipe Line', 'Attractive Location Feasibility'],
              Price: 0,
              Status: 'Under Construction',
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
          MinPrice: 0,
          MaxPrice: 0,
          IsSelected: false,
          CarpetOrSaleable: "Reference Area",
          VariantType: [
            {
              VariantId: 1,
              VariantName : '4BHK + SR',
              CarpetArea: 1687.99,
              FloorPlanImages: '../assets/MV/FloorPlan_2650.png',
              Highlights: ['Double Height Stilt for more Greenery & Open Space','Exclusive Terrace Homes and Fully AC Apartments', '3 Lifts in Each Tower', 'Double Height AC Entrance Lobby on ground at every tower','Near 3 sprawling golf courses', 'Stylish Modular Wardrobe for Chic Robes', 'Exemplary Architecture by Hafeez Contractor', 'Modular Kitchen with Chimney & Gas Pipe Line', 'Attractive Location Feasibility'],
              Price: 52.9,
              Status: 'Under Construction',
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
              FloorPlanImages: '../assets/MV/FloorPlan_2710.png',
              Highlights: ['Double Height Stilt for more Greenery & Open Space','Exclusive Terrace Homes and Fully AC Apartments', '3 Lifts in Each Tower', 'Double Height AC Entrance Lobby on ground at every tower','Near 3 sprawling golf courses', 'Stylish Modular Wardrobe for Chic Robes', 'Exemplary Architecture by Hafeez Contractor', 'Modular Kitchen with Chimney & Gas Pipe Line', 'Attractive Location Feasibility'],
              Price: 52.9,
              Status: 'Under Construction',
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
