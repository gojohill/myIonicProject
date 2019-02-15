import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { PdfpopulatorProvider } from '../../providers/pdfpopulator/pdfpopulator';



/**
 * Generated class for the RtfFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rtf-form',
  templateUrl: 'rtf-form.html',
})
export class RtfFormPage {
  myForm: FormGroup;
  name: AbstractControl;
  address: AbstractControl;
  city: AbstractControl;
  state: AbstractControl;
  zip: AbstractControl;

  errormsg: any;
  fileUrl: any = null;
  test: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
    public PDFPopulator: PdfpopulatorProvider) {

    this.myForm = formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(60), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      address: ['', Validators.compose([Validators.maxLength(60), Validators.required])],
      city: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      state: [''],
      zip: [''],
      dob: [''],
      age: [''],
      phone: [''],
      otherphone: [''],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      marritalStatus: [],
      livingWith: [],
      livingWithOther: [''],
      spouseName: [''],
      spouseAge: [''],
      dateOfMarriage: [''],
      marriageRating: [''],
      spouseSession: [''],
      spouseSaved: [''],
      firstMarriage: [''],
      multiMarriageExplain: [''],
      child1Name: [''],
      child1Age: [''],
      child1Sex: [''],
      child1WhichMarriage: [''],
      child1SelfSupporting: [false],
      child1Married: [false],
      child1Alive: [true],
      child1AgeCauseOfDeath: [''],
      child2Name: [''],
      child2Age: [''],
      child2Sex: [''],
      child2WhichMarriage: [''],
      child2SelfSupporting: [false],
      child2Married: [false],
      child2Alive: [true],
      child2AgeCauseOfDeath: [''],
      Child3Name: [''],
      Child3Age: [''],
      Child3Sex: [''],
      Child3WhichMarriage: [''],
      Child3SelfSupporting: [false],
      Child3Married: [false],
      Child3Alive: [true],
      Child3AgeCauseOfDeath: [''],
      Child4Name: [''],
      Child4Age: [''],
      Child4Sex: [''],
      Child4WhichMarriage: [''],
      Child4SelfSupporting: [false],
      Child4Married: [false],
      Child4Alive: [true],
      Child4AgeCauseOfDeath: [''],
      saved: [false],
      savedWhen: [''],
      savedDescribe: [''],
      savedDescribe2: [''],
      baptismHolySpirit: [''],
      baptismHolySpiritWhen: [''],
      currentRelationshipGod: [''],
      churchAfflications: [''],
      reasonForSession: [''],
      affectsLifeStyle: [''],
      feelAboutYourself: ['']
      , relationship: []
    });

    this.name = this.myForm.controls['name'];
    this.address = this.myForm.controls['address'];
    this.city = this.myForm.controls['city'];
    this.state = this.myForm.controls['state'];
    this.zip = this.myForm.controls['zip'];


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RtfFormPage');
  }

  submitPg() {

    this.errormsg = "";
    if (this.name.hasError('required')) {
      this.errormsg = "Name required";
      return;
    }
    if (this.address.hasError('required')) {
      this.errormsg = "Address required"
      return;
    }

    let jsonData = this.prepareJson();

    this.PDFPopulator.populatePDF(jsonData).subscribe(response => {
      //console.log(response)
      const file = new Blob(
        [response],
        { type: 'application/pdf' });
      //Build a URL from the file
      //console.log(file)
      alert(file);

      this.fileUrl = this.PDFPopulator.transform(URL.createObjectURL(file));
    }, err => {
      //console.log(err.message);
      alert(err.message)
    });

  }


  prepareJson() {
    let formObj = this.myForm.getRawValue();

    var object = {};
    var object1 = {
      "emailGroup": [
        {
          "toEmail": [
            "gojohill@yahoo.com"
          ],
          "fromEmail": "cccInnerHealing@gmail.com",
          "ccEmail": [
            "gojohill@outlook.com"
          ],
          "bccEmail": [
            "gojohill@gmail.com"
          ]
        }
      ],
      "sendEmail": false,
      "subject": "Testing PDF from PDFMaker2",
      "content": "Attached is the PDF that needs to be reviewed"
    }

    var object2 = {};
    var object3 = {};

    object['hdr'] = object1;
    object['data'] =
      [
        {
          "fieldName": "Name",
          "fieldValue": formObj.name,
          "fieldType": "Tx"
        },
        {
          "fieldName": "Address",
          "fieldValue": formObj.address,
          "fieldType": "Tx"
        },
        {
          "fieldName": "CityStateZip",
          "fieldValue": formObj.city + ", " + formObj.state + " " + formObj.zip,
          "fieldType": "Tx"
        },
        {
          "fieldName": "DOB",
          "fieldValue": formObj.dob,
          "fieldType": "Tx"
        },
        {
          "fieldName": "Age",
          "fieldValue": formObj.age,
          "fieldType": "Tx"
        },
        {
          "fieldName": "Home Phone",
          "fieldValue": formObj.phone,
          "fieldType": "Tx"
        },
        {
          "fieldName": "Cell",
          "fieldValue": formObj.otherphone,
          "fieldType": "Tx"
        },
        {
          "fieldName": "Email",
          "fieldValue": formObj.email,
          "fieldType": "Tx"
        }
      ]

    console.log(formObj.marritalStatus);
    object['data'].push({
      "fieldName": formObj.marritalStatus,
      "fieldValue": "On",
      "fieldType": "Btn"
    });

    if (formObj.livingWith) {
      object['data'].push({
        "fieldName": formObj.livingWith,
        "fieldValue": "On",
        "fieldType": "Btn"
      });
    }

    if (formObj.livingWithOther) {
      object['data'].push({
        "fieldName": "Other",
        "fieldValue": formObj.livingWithOther,
        "fieldType": "Txt"
      });
    }


    object['data'].push({
      "fieldName": 'Spouses Name',
      "fieldValue": formObj.spouseName,
      "fieldType": "Txt"
    });


    object['data'].push({
      "fieldName": 'Age_2',
      "fieldValue": formObj.dateOfMarriage,
      "fieldType": "Txt"
    });

    object['data'].push({
      "fieldName": 'Date of Marriage',
      "fieldValue": formObj.spouseAge,
      "fieldType": "Txt"
    });

    if (formObj.livingWith) {
      object['data'].push({
        "fieldName": formObj.livingWith,
        "fieldValue": "On",
        "fieldType": "Btn"
      });
    }

    object['data'].push({
      "fieldName": 'Other',
      "fieldValue": formObj.livingWithOther,
      "fieldType": "Txt"
    });

    /**
     *  firstMarriage: [''],
    multiMarriageExplain: ['']
     */
    if (formObj.marriageRating) {
      object['data'].push({
        "fieldName": formObj.marriageRating,
        "fieldValue": "On",
        "fieldType": "Btn"
      });
    }

    if (formObj.spouseSession) {
      object['data'].push({
        "fieldName": formObj.spouseSession,
        "fieldValue": "On",
        "fieldType": "Btn"
      });
    }

    if (formObj.spouseSaved) {
      object['data'].push({
        "fieldName": formObj.spouseSaved,
        "fieldValue": "On",
        "fieldType": "Btn"
      });
    }

    if (formObj.firstMarriage) {
      object['data'].push({
        "fieldName": formObj.firstMarriage,
        "fieldValue": "On",
        "fieldType": "Btn"
      });
    }

    object['data'].push({
      "fieldName": 'If not please explain',
      "fieldValue": formObj.multiMarriageExplain,
      "fieldType": "Txt"
    });

    /**
     * child1Name: [''],
    child1Age: [''],
    child1Sex: [''],
    child1WhichMarriage: ['']
     */

    object['data'].push({
      "fieldName": 'NameRow1',
      "fieldValue": formObj.child1Name,
      "fieldType": "Txt"
    });

    object['data'].push({
      "fieldName": 'AgeRow1',
      "fieldValue": formObj.child1Age,
      "fieldType": "Txt"
    });

    object['data'].push({
      "fieldName": 'SexRow1',
      "fieldValue": formObj.child1Sex,
      "fieldType": "Txt"
    });

    object['data'].push({
      "fieldName": 'From which MarriageRow1',
      "fieldValue": formObj.child1WhichMarriage,
      "fieldType": "Txt"
    });

    if (formObj.child1SelfSupporting) {
      object['data'].push({
        "fieldName": 'SelfSupportingRow1',
        "fieldValue": 'On',
        "fieldType": "Btn"
      });
    }

    if (formObj.child1Married) {
      object['data'].push({
        "fieldName": 'ChildMarriedRow1',
        "fieldValue": 'On',
        "fieldType": "Btn"
      });
    }

    if (formObj.child1Alive) {
      object['data'].push({
        "fieldName": 'ChildStillLivingRow1',
        "fieldValue": 'On',
        "fieldType": "Btn"
      });
    }

    object['data'].push({
      "fieldName": 'Age at and Cause of Death',
      "fieldValue": formObj.child1AgeCauseOfDeath,
      "fieldType": "Txt"
    });

    //Child 2
    
    object['data'].push({
      "fieldName": 'NameRow2',
      "fieldValue": formObj.child2Name,
      "fieldType": "Txt"
    });

    object['data'].push({
      "fieldName": 'AgeRow2',
      "fieldValue": formObj.child2Age,
      "fieldType": "Txt"
    });

    object['data'].push({
      "fieldName": 'SexRow2',
      "fieldValue": formObj.child2Sex,
      "fieldType": "Txt"
    });

    object['data'].push({
      "fieldName": 'From which MarriageRow2',
      "fieldValue": formObj.child2WhichMarriage,
      "fieldType": "Txt"
    });

    if (formObj.child2SelfSupporting) {
      object['data'].push({
        "fieldName": 'SelfSupportingRow2',
        "fieldValue": 'On',
        "fieldType": "Btn"
      });
    }

    if (formObj.child2Married) {
      object['data'].push({
        "fieldName": 'ChildMarriedRow2',
        "fieldValue": 'On',
        "fieldType": "Btn"
      });
    }

    if (formObj.child2Alive) {
      object['data'].push({
        "fieldName": 'ChildStillLivingRow2',
        "fieldValue": 'On',
        "fieldType": "Btn"
      });
    }

    object['data'].push({
      "fieldName": 'Age at and Cause of DeathRow2',
      "fieldValue": formObj.child2AgeCauseOfDeath,
      "fieldType": "Txt"
    });

     //Child 3
    
     object['data'].push({
      "fieldName": 'NameRow3',
      "fieldValue": formObj.Child3Name,
      "fieldType": "Txt"
    });

    object['data'].push({
      "fieldName": 'AgeRow3',
      "fieldValue": formObj.Child3Age,
      "fieldType": "Txt"
    });

    object['data'].push({
      "fieldName": 'SexRow3',
      "fieldValue": formObj.Child3Sex,
      "fieldType": "Txt"
    });

    object['data'].push({
      "fieldName": 'From which MarriageRow3',
      "fieldValue": formObj.Child3WhichMarriage,
      "fieldType": "Txt"
    });

    if (formObj.Child3SelfSupporting) {
      object['data'].push({
        "fieldName": 'SelfSupportingRow3',
        "fieldValue": 'On',
        "fieldType": "Btn"
      });
    }

    if (formObj.Child3Married) {
      object['data'].push({
        "fieldName": 'ChildMarriedRow3',
        "fieldValue": 'On',
        "fieldType": "Btn"
      });
    }

    if (formObj.Child3Alive) {
      object['data'].push({
        "fieldName": 'ChildStillLivingRow3',
        "fieldValue": 'On',
        "fieldType": "Btn"
      });
    }

    object['data'].push({
      "fieldName": 'Age at and Cause of DeathRow3',
      "fieldValue": formObj.Child3AgeCauseOfDeath,
      "fieldType": "Txt"
    });


     //Child 4
    
     object['data'].push({
      "fieldName": 'NameRow4',
      "fieldValue": formObj.Child4Name,
      "fieldType": "Txt"
    });

    object['data'].push({
      "fieldName": 'AgeRow4',
      "fieldValue": formObj.Child4Age,
      "fieldType": "Txt"
    });

    object['data'].push({
      "fieldName": 'SexRow4',
      "fieldValue": formObj.Child4Sex,
      "fieldType": "Txt"
    });

    object['data'].push({
      "fieldName": 'From which MarriageRow4',
      "fieldValue": formObj.Child4WhichMarriage,
      "fieldType": "Txt"
    });

    if (formObj.Child4SelfSupporting) {
      object['data'].push({
        "fieldName": 'SelfSupportingRow4',
        "fieldValue": 'On',
        "fieldType": "Btn"
      });
    }

    if (formObj.Child4Married) {
      object['data'].push({
        "fieldName": 'ChildMarriedRow4',
        "fieldValue": 'On',
        "fieldType": "Btn"
      });
    }

    if (formObj.Child4Alive) {
      object['data'].push({
        "fieldName": 'ChildStillLivingRow4',
        "fieldValue": 'On',
        "fieldType": "Btn"
      });
    }

    object['data'].push({
      "fieldName": 'Age at and Cause of DeathRow4',
      "fieldValue": formObj.Child4AgeCauseOfDeath,
      "fieldType": "Txt"
    });

    // Saved and When

    if (formObj.saved) {
      object['data'].push({
        "fieldName": formObj.saved,
        "fieldValue": 'On',
        "fieldType": "Btn"
      });
    }

    object['data'].push({
      "fieldName": 'undefined_13',
      "fieldValue": formObj.savedWhen,
      "fieldType": "Txt"
    });

    object['data'].push({
      "fieldName": 'When',
      "fieldValue": formObj.savedDescribe,
      "fieldType": "Txt"
    });

    object['data'].push({
      "fieldName": 'Briefly tell what happened',
      "fieldValue": formObj.savedDescribe2,
      "fieldType": "Txt"
    });

    //baptismHolySpirit: [''],
    //baptismHolySpiritWhen: ['']

    if (formObj.baptismHolySpirit) {
      object['data'].push({
        "fieldName": formObj.baptismHolySpirit,
        "fieldValue": 'On',
        "fieldType": "Btn"
      });
    }

    object['data'].push({
      "fieldName": 'undefined_14',
      "fieldValue": formObj.baptismHolySpiritWhen,
      "fieldType": "Txt"
    });

    //Describe your present relationship with the Lord 1

    object['data'].push({
      "fieldName": 'Describe your present relationship with the Lord 1',
      "fieldValue": formObj.currentRelationshipGod,
      "fieldType": "Txt"
    });

    object['data'].push({
      "fieldName": 'Please list all previous church affiliations',
      "fieldValue": formObj.churchAfflications,
      "fieldType": "Txt"
    });
    
    object['data'].push({
      "fieldName": '1 Describe the issue that prompted you to seek ministry at this time 1',
      "fieldValue": formObj.reasonForSession,
      "fieldType": "Txt"
    });

    object['data'].push({
      "fieldName": '2 How is your life affected by this issue 1',
      "fieldValue": formObj.affectsLifeStyle,
      "fieldType": "Txt"
    });

    object['data'].push({
      "fieldName": '3 How do you feel about yourself because of this issue 1',
      "fieldValue": formObj.feelAboutYourself,
      "fieldType": "Txt"
    });

    
    

    console.log(object);

    return object;

  }


}
