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
  };

  export const detailedDataEntryData={
    "elements":[
         
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


export const loanInformation={
  "elements":[
       
  {
    "name": "loan_type",
    "type": "dropdown",
    "title": "Loan type",
    "placeholder": "Loan Type",
    "isRequired":true,
    "dropdownData": [
      { key: "Home_loan", value: "Home_Loan" },
      { key: "House_renovation_loans", value: "House_Renovation_Loans" },
      { key: "House_extension_loans", value: "House_Extension_Loans" },
      { key: "Plot_loans", value: "Plot_Loans" },
      { key: "Loan_against_residential_property", value: "Loan_Against_Residential_Property" },
      { key: "Non_residential_premises_loans", value: "Non_Residential_Premises_Loans" },
      { key: "Loan_against_commercial_property", value: "Loan_Against_Commercial_Property" } 
    ],
    "order":1,
    "section":"Loan Information"
  },
  {
    "name": "transfer_outstanding_loan",
    "type": "RadioButton",
    "title": "Do you want to transfer outstanding loan from another Bank/Financial Institution:",
    "isRequired":true,
    "radioData":[
      {key:"yes", value:"Yes" },
      {key:"no",value:"No"}
 
  ],
    "order":2,
    "section":"Loan Information"
  },
  {
    "name": "rate_option",
    "type": "dropdown",
    "title": "Rate Option",
    "isRequired":true,
    "dropdownData": [
        { key: "fixed", value: "Fixed" },
        { key: "variable", value: "Variable" },
        { key: "hybrid", value: "Hybrid" },
        { key: "Interest_only", value: "Interest_Only" } 
      ],
 
    "order":3,
    "section":"Loan Information"
  },
  {
    "name": "tenure",
    "type": "dropdown",
    "title": "Tenure(in years)",
    "isRequired":true,
    "dropdownData": [
        { key: "1", value: "1" },
        { key: "2", value: "2" },
        { key: "3", value: "3" },
        { key: "4", value: "4" },
        { key: "5", value: "5" },
        { key: "6", value: "6" },
        { key: "7", value: "7" },
        { key: "8", value: "8" },
        { key: "9", value: "9" },
        { key: "10", value: "10" },
        { key: "11", value: "11" },
        { key: "12", value: "12" },
        { key: "13", value: "13" },
        { key: "14", value: "14" },
        { key: "15", value: "15" },
        { key: "16", value: "16" },
        { key: "17", value: "17" },
        { key: "18", value: "18" },
        { key: "19", value: "19" },
        { key: "20", value: "20" },
        { key: "21", value: "21" },
        { key: "22", value: "22" },
        { key: "23", value: "23" },
        { key: "24", value: "24" },
        { key: "25", value: "25" },
        { key: "26", value: "26" },
        { key: "27", value: "27" },
        { key: "28", value: "28" },
        { key: "29", value: "29" },
        { key: "30", value: "30" }    
      ],
 
    "order":4,
    "section":"Loan Information"
  },
  {
    "name": "desired_loan_amount",
    "type": "TextInput",
    "title": "Desired Loan Amount(INR)",
    "inputType":"numeric",
    "placeholder": "Amount",
    "isRequired":true,
    "order":5,
    "section":"Loan Information"
  },
  {
    "name": "apply_for_another_loan",
    "type": "RadioButton",
    "title": "Do you wish to apply for another loan along with above loan in the same property with different rate option/loan type:",
    "isRequired":true,
    "radioData":[
      {key:"yes", value:"Yes" },
      {key:"no",value:"No"}
 
  ],
    "order":6,
    "section":"Loan Information"
  },
  {
    "name":"loan_approval",
    "type":"Switch",
    "title":"The loan approval shall remain subject to assessment legal and technical check and valuation of the property under finance. Such assessment is for internal reliance alone and does not create any right in favour of anyone including the borrower(s) in any manner whatever (I/We agree)",
    "order":7,
    "section":"Loan Information"
  },
  {
    "name": "savings_in_bank",
    "type": "TextInput",
    "title": "Savings in Bank(India)",
    "inputType":"numeric",
    "placeholder": "Amount(INR)",
    "isRequired":true,
    "order":8,
    "section":"Investment Details"
  },
  {
    "name": "immovable_properties",
    "type": "TextInput",
    "title": "Immovable Properties",
    "inputType":"numeric",
    "placeholder": "Amount(INR)",
    "isRequired":true,
    "order":9,
    "section":"Investment Details"
  },
 
  {
    "name": "other_investments",
    "type": "TextInput",
    "title": "Other Investments",
    "inputType":"numeric",
    "placeholder": "Amount(INR)",
    "isRequired":true,
    "order":10,
    "section":"Investment Details"
  },
  {
    "name": "insurance_policies",
    "type": "TextInput",
    "title": "Insurance Policies",
    "inputType":"numeric",
    "placeholder": "Amount(INR)",
    "isRequired":true,
    "order":11,
    "section":"Investment Details"
  },

  {
    "name": "bank_name",
    "type": "dropdown",
    "title": "Bank Name",
    "isRequired":true,
    "dropdownData": [
        { key: "Bank_of_india", value: "Bank_Of_India" },
        { key: "hdfc", value: "HDFC" },
        { key: "Axis_bank", value: "Axis_Bank" },
        { key: "State_bank_of_india", value: "State_Bank_Of_India" },
        { key: "Idfc_first_bank", value: "IDFC_First_Bank" }
      ],
 
    "order":12,
    "section":"Bank Account Details"
  },
  {
    "name": "branch",
    "type": "dropdown",
    "title": "Branch",
    "isRequired":true,
    "dropdownData": [
        { key: "banashankari", value: "Banashankari" },
        { key: "btm", value: "BTM" },
        { key: "jpnagar", value: "JP_Nagar" },
        { key: "electronic_city", value: "Electronic_City" }
      ],
 
    "order":13,
    "section":"Bank Account Details"
  },
  {
    "name": "ifsc_code",
    "type": "TextInput",
    "title": "IFSC Code",
    "placeholder":"IFSC Code",
    "isRequired":true,
    "order":14,
    "section":"Bank Account Details"
  },
  {
    "name": "account_type",
    "type": "dropdown",
    "title": "Account Type",
    "isRequired":true,
    "dropdownData": [
        { key: "savings", value: "Savings" },
        { key: "current", value: "Current" },
      ],
 
    "order":15,
    "section":"Bank Account Details"
  },
  {
    "name": "account_number",
    "type": "TextInput",
    "title": "Account Number",
    "placeholder":"Account Number",
    "inputType":"numeric",
    "isRequired":true,
    "order":16,
    "section":"Bank Account Details"
  },
 
  {
    "name": "customer_id",
    "type": "TextInput",
    "title": "Customer ID",
    "placeholder":"Customer ID",
    "isRequired":true,
    "order":17,
    "section":"Bank Account Details"
  },
  {
    "name": "loan_availed_by",
    "type": "dropdown",
    "title": "Loan Availed By",
    "isRequired":true,
    "dropdownData": [
        { key: "Bank_of_india", value: "Bank_Of_India" },
        { key: "hdfc", value: "HDFC" },
        { key: "Axis_bank", value: "Axis_Bank" },
        { key: "State_bank_of_india", value: "State_Bank_Of_India" },
        { key: "Idfc_first_bank", value: "IDFC_First_Bank" }
      ],
 
    "order":18,
    "section":"Bank Account Details"
  },
  {
    "name": "institution_name",
    "type": "TextInput",
    "title": "Institution Name",
    "placeholder":"Institution Name",
    "isRequired":true,
    "order":19,
    "section":"Bank Account Details"
  },
 
  {
    "name": "outstanding_loan",
    "type": "TextInput",
    "title": "Outstanding Loan",
    "placeholder":"Outstanding Loan",
    "isRequired":true,
    "order":20,
    "section":"Bank Account Details"
  },
 
  {
    "name": "balance_term",
    "type": "TextInput",
    "title": "Balance term(in years)",
    "placeholder":"Balance Term",
    "inputType":"numeric",
    "isRequired":true,
    "order":21,
    "section":"Bank Account Details"
  },
  {
    "name": "loan_type",
    "type": "dropdown",
    "title": "Loan Type",
    "isRequired":true,
    "dropdownData": [
        { key: "savings", value: "Savings" },
        { key: "current", value: "Current" },
      ],
 
    "order":22,
    "section":"Bank Account Details"
  },
 
  {
    "name": "loan_amount",
    "type": "TextInput",
    "title": "Loan Amount",
    "placeholder":"Loan Amount",
    "inputType":"numeric",
    "isRequired":true,
    "order":23,
    "section":"Bank Account Details"  
  },
 
  {
    "name": "emi",
    "type": "TextInput",
    "title": "EMI",
    "placeholder":"EMI",
    "inputType":"numeric",
    "isRequired":true,
    "order":24,
    "section":"Bank Account Details"
  },
  {
    "name": "payment_mode",
    "type": "dropdown",
    "title": "Payment Mode",
    "isRequired":true,
    "dropdownData": [
        { key: "banashankari", value: "Banashankari" },
        { key: "btm", value: "BTM" },
        { key: "jpnagar", value: "JP_Nagar" },
        { key: "electronic_city", value: "Electronic_City" }
      ],
 
    "order":25,
    "section":"Bank Account Details"
  },
 
 
 
]
 
}


export const generalInformation={
  "elements":[
      {
          "name": "loan_is_to_be_availed_for",
          "type": "dropdown",
          "title": "Loan is to be availed for",
          "isRequired":true,
          "dropdownData": [
            { key: "document", value: "Document" },
            { key: "fees", value: "FEES" },
          ],
          "order":1,
          "section":"Property Details"
        },

        {
          "name": "door_number",
          "type": "TextInput",
          "title": "Flat/Door no",
          "placeholder":"Flat/Door no",
          "inputType":"numeric",
          "isRequired":true,
          "order":2,
          "section":"Property Details"
        },

        {
          "name": "name_of_building",
          "type": "TextInput",
          "title": "Name of Building",
          "placeholder":"Name of Building",
          "order":3,
          "section":"Property Details"
        },

        {
          "name": "street",
          "type": "TextInput",
          "title": "Road/Street",
          "placeholder":"Road/Street",
          "isRequired":true,
          "order":4,
          "section":"Property Details"
        },

        {
          "name": "locality",
          "type": "TextInput",
          "title": "Area/Locality",
          "placeholder":"Area/Locality",
          "isRequired":true,
          "order":5,
          "section":"Property Details"
        },
        {
          "name": "land_mark",
          "type": "TextInput",
          "title": "Land Mark/Post Office",
          "placeholder":"Land Mark/Post Office",
          "isRequired":true,
          "order":6,
          "section":"Property Details"
        },
        {
          "name": "taluka",
          "type": "TextInput",
          "title": "Taluka/Sub division",
          "placeholder":"Taluka/Sub division",
          "isRequired":true,
          "order":7,
          "section":"Property Details"
        },
        {
          "name": "state",
          "type": "TextInput",
          "title": "State",
          "placeholder":"State",
          "isRequired":true,
          "order":8,
          "section":"Property Details"
        },
        {
          "name": "city",
          "type": "TextInput",
          "title": "City",
          "placeholder":"City",
          "isRequired":true,
          "order":9,
          "section":"Property Details"
        },

        {
          "name": "pincode",
          "type": "TextInput",
          "title": "Pincode",
          "placeholder":"Pincode",
          "inputType":"numeric",
          "isRequired":true,
          "order":10,
          "section":"Property Details"
        },

        {
          "name":"locate_your_property",
          "type":"Text",
          "title":"Would you like to locate your property on map?",
          "order":11,
          "section":"Property Details"

        },
        {
          "name": "estimate_of_required_funds",
          "type": "TextInput",
          "title": "Estimate of required funds",
          "placeholder":"Estimate of required funds",
          // "inputType":"numeric",
          "order":12,
          "section":"Property Details"
        },

        {
          "name": "estimate_of_source",
          "type": "TextInput",
          "title": "Estimate of source to meet requirement of funds",
          "placeholder":"Estimate of source to meet requirement of funds",
          // "inputType":"numeric",
          "order":13,
          "section":"Property Details"
        },

        {
          "name": "los_loan_requested",
          "type": "TextInput",
          "title": "LOS Loan requested",
          "placeholder":"LOS Loan requested",
          // "inputType":"numeric",
          "order":14,
          "section":"Property Details"
        },
        {
          "name": "purchase_cost",
          "type": "TextInput",
          "title": "Purchase Cost",
          "placeholder":"Purchase Cost",
          "inputType":"numeric",
          "isRequired":true,
          "order":15,
          "section":"Property Details"
        },

        {
          "name": "incidental_cost",
          "type": "TextInput",
          "title": "Incidental Cost",
          "placeholder":"Incidental Cost",
          "inputType":"numeric",
          "isRequired":true,
          "order":16,
          "section":"Property Details"
        },

        {
          "name": "other_cost",
          "type": "TextInput",
          "title": "Other Cost",
          "placeholder":"Other Cost",
          "inputType":"numeric",
          "isRequired":true,
          "order":17,
          "section":"Property Details"
        },

        {
          "name": "provident_fund",
          "type": "TextInput",
          "title": "Provident Fund",
          "placeholder":"Provident Fund",
          "inputType":"numeric",
          "order":18,
          "section":"Property Details"
        },

        {
          "name": "saving_from_bank",
          "type": "TextInput",
          "title": "Saving from Bank",
          "placeholder":"Saving from Bank",
          "inputType":"numeric",
          "isRequired":true,
          "order":19,
          "section":"Property Details"
        },

        {
          "name": "saving_from_bank",
          "type": "TextInput",
          "title": "Saving from Bank",
          "placeholder":"Saving from Bank",
          "inputType":"numeric",
          "isRequired":true,
          "order":20,
          "section":"Property Details"
        },

        {
          "name": "disposal_of_investment",
          "type": "TextInput",
          "title": "Disposal of Investment",
          "placeholder":"Disposal of Investment",
          "order":21,
          "section":"Property Details"
        },

        {
          "name": "sale_of_property",
          "type": "TextInput",
          "title": "Sale of Property",
          "placeholder":"Sale of Property",
          "order":22,
          "section":"Property Details"
        },

        {
          "name": "other",
          "type": "TextInput",
          "title": "Other",
          "placeholder":"Other",
          "order":23,
          "section":"Property Details"
        },

        {
          "name": "total_requirement_of_funds",
          "type": "TextInput",
          "title": "Total Requirement of Funds(INR)",
          "placeholder":"Total Requirement of Funds",
          "inputType":"numeric",
          "order":24,
          "section":"Property Details"
        },

        {
          "name": "total_source_of_funds",
          "type": "TextInput",
          "title": "Total Source of Funds(INR)",
          "placeholder":"Total Source of Funds",
          "inputType":"numeric",
          "order":25,
          "section":"Property Details"
        },
        {
          "name":"note",
          "type":"Text",
          "title":"NOTE: The Requirement of funds should be equal to the estimate of source of funds.",
          "order":26,
          "section":"Property Details"

        },
  ]
}

