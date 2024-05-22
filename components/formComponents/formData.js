export const basicInfoFormData = {
    "elements": [
     {
        "name": "loan_type",
        "type":"dropdown",
        "title": "Type Of Loan",
        "placeholder": "Select Loan Type",
          "dropdownData": [
          { "key": "home_loan", "value": "Home Loan" },
          { "key": "house_renovation_loans", "value": "House Renovation Loans" },
          { "key": "home_extension_loans", "value": "Home Extension Loans" },
          { "key": "plot_loans", "value": "Plot Loans" },
          { "key": "loan_against_residential_property", "value": "Loan Against Residential Property" },
        ],
         "isRequired":true,
         "order":1,
         "section":"Basic Information"
      },
   
      {
        "name": "property_located_state",
        "type": "dropdown",
        "title": "Property Located State",
        "placeholder": "Select state",
        "order":2,
        "dropdownData": [
            { "key": "karnataka", "value": "Karnataka" },],
        //"sectionName":"General"
        "order":2,
        "section":"Basic Information"
      },
   
     {
        "name": "property_cost",
        "type": "TextInput",
        "title": "Property Cost",
        "inputType":"numeric",
        "placeholder": "Enter the property cost",
        //"sectionName":"General"
        "order":3,
        "section":"Basic Information"
      },


   
      {
        "name": "email_id",
        "type": "TextInput",
        "title": "Email ID",
        "placeholder":'Enter Email ID',
        "validation": {
            "regex": /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "message": "Please enter a valid email address."
          },
        
         "isRequired":true,
         "order":4,
         "section":"Basic Information"
      },
   
      {
        "name": "first_name",
        "type": "TextInput",
        "title": "First Name",
        "placeholder": "Enter First Name",
        "isRequired":true,
        "order":5,
        "section":"Basic Information"
       
      },
      {
        "name": "last_name",
        "type": "TextInput",
        "title": "Last Name",
        "placeholder": "Enter Last Name",
        "isRequired":true,
        "order":6,
        "section":"Basic Information"

      },
      {
        "name": "mobile",
        "type": "TextInput",
        "inputType":"phone",
        "title": "Mobile Number Of Applicant",
        "placeholder": "Enter Mobile Number",
        "isRequired":true,
        "order":7,
        "section":"Basic Information"
 
      },
     
      {
        "name": "currently_residing_city",
        "type": "TextInput",
        "title": "Currently Residing City",
        "placeholder": "Currently Residing City",
        "sectionName":"General",
        "order":8,
        "section":"Basic Information"
      },
      {
        "name": "gender",
        "type": "dropdown",
        "title": "Gender",
        "order":9,
        "dropdownData": [
            { key: "Male", value: 'male' },
            { key: "Female", value: 'female' },
            { key: "Other", value: 'other' },
          ],
          "order":9,
          "section":"Basic Information",
          "isRequired":true
      },
   
      {
        "name": "age",
        "type": "dropdown",
        "title": "Age",
        "placeholder": "",
        "dropdownData": [
          {"key": "20", "value": "20"},
          {"key": "21", "value": "21"},
          {"key": "22", "value": "22"},
          {"key": "23", "value": "23"},
          {"key": "24", "value": "24"},
          {"key": "25", "value": "25"},
          {"key": "26", "value": "26"},
          {"key": "27", "value": "27"},
          {"key": "28", "value": "28"},
          {"key": "29", "value": "29"},
          {"key": "30", "value": "30"},
          {"key": "31", "value": "31"},
          {"key": "32", "value": "32"},
          {"key": "33", "value": "33"},
          {"key": "34", "value": "34"},
          {"key": "35", "value": "35"},
          {"key": "36", "value": "36"},
          {"key": "37", "value": "37"},
          {"key": "38", "value": "38"},
          {"key": "39", "value": "39"},
          {"key": "40", "value": "40"},
          {"key": "41", "value": "41"},
          {"key": "42", "value": "42"},
          {"key": "43", "value": "43"},
          {"key": "44", "value": "44"},
          {"key": "45", "value": "45"},
          {"key": "46", "value": "46"},
          {"key": "47", "value": "47"},
          {"key": "48", "value": "48"},
          {"key": "49", "value": "49"},
          {"key": "50", "value": "50"},
          {"key": "51", "value": "51"},
          {"key": "52", "value": "52"},
          {"key": "53", "value": "53"},
          {"key": "54", "value": "54"},
          {"key": "55", "value": "55"},
          {"key": "56", "value": "56"},
          {"key": "57", "value": "57"},
          {"key": "58", "value": "58"},
          {"key": "59", "value": "59"},
          {"key": "60", "value": "60"},
          {"key": "61", "value": "61"},
          {"key": "62", "value": "62"},
          {"key": "63", "value": "63"},
          {"key": "64", "value": "64"},
          {"key": "65", "value": "65"},
          {"key": "66", "value": "66"},
          {"key": "67", "value": "67"},
          {"key": "68", "value": "68"},
          {"key": "69", "value": "69"},
          {"key": "70", "value": "70"},
          {"key": "71", "value": "71"},
          {"key": "72", "value": "72"},
          {"key": "73", "value": "73"},
          {"key": "74", "value": "74"},
          {"key": "75", "value": "75"},
          {"key": "76", "value": "76"},
          {"key": "77", "value": "77"},
          {"key": "78", "value": "78"},
          {"key": "79", "value": "79"},
          {"key": "80", "value": "80"}
        ],
        "order":10,
        "section":"Basic Information"
      
      },
   
      {
        "name": "occupation",
        "type": "dropdown",
        "title": "Occupation",
     
        "placeholder":'Select Occupation',
        "dropdownData": [
          { key: "EMPLOYED", value: "EMPLOYED" },
          { key: "HOUSEWIFE", value: "HOUSEWIFE" },
          { key: "RETIRED", value: "RETIRED" },
          { key: "STUDENT", value: "STUDENT" },
          { key: "SELF-EMPLOYED", value: "SELF-EMPLOYED" },
          
        ],
        "order":11,
        "section":"Basic Information"
      },
   
      {
        "name": "gross_monthly_income",
        "type": "TextInput",
        "title": "Gross/ Total Monthly Income",
        "placeholder": "Enter amount",
        "inputType":"numeric",
         "isRequired":true,
         "order":12,
         "section":"Basic Information"
       
    },
   
    {
      "name": "total_emi_paid_monthly",
      "type": "TextInput",
      "title": "Total EMI Paid Monthly For All Loans",
      "inputType":"numeric",
      "placeholder": "Total EMI Paid",
      "sectionName":"Forecast",
       "isRequired":true,
       "order":13,
       "section":"Basic Information"
     
  },
      {
        "name": "retirement_age",
        "type":"TextInput",
        "title": "Retirement Age",
        "inputType": "numeric",
         "placeholder":"Enter Age",
        "order":14,
        "section":"Basic Information"
      },
      {
        "name": "have_you_shortlisted_property",
        "type":"RadioButton",
        "title": "Have you shortlisted property?",
        // "inputType": "numeric",
        "radioData":[
            {key:"yes", value:"Yes" },
            {key:"no",value:"No"}

        ],
        "order":14,
        "section":"Basic Information"
      },

     
      {
        "name": "property_located_city",
        "type": "TextInput",
        "title": "Property Located City",
        "placeholder": "Property Located City",
        "isRequired":true,
        "order":15,
        "section":"Basic Information"
      },

  ]
  }
   