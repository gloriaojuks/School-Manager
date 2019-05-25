export interface Student {
    firstName: string;
    middleName: String;
    lastName: string;
    email: string,
    phone: string;
    class: string;
    arm: string;
    subjects: Array<string>;
    CA: CA;
    disabled: boolean,
    sickness: {},
    dateCreated: Date,
    password: string
}

export interface CA {
  attendance: number;
  ca: {
    subjectName: string;
    grade: string;
  }
}
