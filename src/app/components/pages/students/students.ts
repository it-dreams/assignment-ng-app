export class Students {
    id: string;
    studName: string;
    studClass: string;
    studSection: string;
    studSubjects: any;

    constructor(id: string, studName: string, studClass: string, studSection:string, studSubjects: any) {
        this.id = id;
        this.studName = studName;
        this.studClass = studClass;
        this.studSection = studSection;
        this.studSubjects = studSubjects;
    }    
}