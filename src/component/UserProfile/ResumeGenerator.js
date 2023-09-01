import React, { useState } from "react";
import jsPDF from "jspdf";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";



const ResumeGenerator = ({ candidateInfo }) => {
  const [isLoading, setLoading] = useState(false);
  const [shouldNavigate, setShouldNavigate] = useState(false);

  useEffect(() => {
    const navigateTimeout = setTimeout(() => {
      if (shouldNavigate) {
        // Navigate to another component
        // You can replace '/another-component' with the desired path
        // window.location.href = "/UserLogin";
      }
    }, 2000);

    return () => {
      clearTimeout(navigateTimeout);
    };
  }, [shouldNavigate]);
    const handleClick = () => {
      setLoading(true);
      setShouldNavigate(true);
    };


  const generatePDF = () => {
    setLoading(true);

   let pdf = new jsPDF();
   let lineHeight = 10;
   let pageHeight = pdf.internal.pageSize.height;
   let startX = 30;
   let startY = 20;

   const defaultFontSize = 11;
   const increasedFontSize = 16; // Change this value to your desired size

   const addTextWithNextPage = (text, startYPosition, fontSize, isBold) => {
     if (isBold) {
       pdf.setFont("helvetica", "bold");
     } else {
       pdf.setFont("helvetica", "normal"); // Reset font style to normal
     }

     pdf.setFontSize(fontSize); // Set the font size

     const lines = pdf.splitTextToSize(text, 165);

     lines.forEach((line) => {
       if (startYPosition + lineHeight > pageHeight) {
         pdf.addPage();
         startYPosition = 20;
       }

       pdf.text(line, startX, startYPosition);
       startYPosition += lineHeight;
     });

     pdf.setFontSize(defaultFontSize); // Reset the font size to default
     pdf.setFont("helvetica", "normal"); //Reset font style to normal
     return startYPosition;
   };

   //Name
   startY = addTextWithNextPage(
     candidateInfo.name,
     startY + lineHeight * 2,
     increasedFontSize,
     true
   );

   //Address
   const addressValue =
     "Sai shraddha chawl,Indira nagar,Jogeshwari(E), mumbai-400060"; // Replace with your dynamic value
   const addressText = `Address: ${addressValue}`;
   startY = addTextWithNextPage(addressText, startY, defaultFontSize, false);

   //Phone No
   const phoneNoValue1 = candidateInfo.mobile; // Replace with your dynamic value
   const phoneNoText1 = `Mobile No: ${phoneNoValue1}`;
   startY = addTextWithNextPage(phoneNoText1, startY, defaultFontSize, false);

   //Email id
   const emailValue1 = candidateInfo.email; // Replace with your dynamic value
   const emailText1 = `Email Id: ${emailValue1}`;
   startY = addTextWithNextPage(emailText1, startY, defaultFontSize, false);

   pdf.setLineWidth(0.8); // Set the width of the line
   pdf.line(startX, startY + lineHeight, 180, startY + lineHeight);

   //About
   startY = addTextWithNextPage(
     "About",
     startY + lineHeight * 2,
     increasedFontSize,
     true
   );
   startY = addTextWithNextPage(
     candidateInfo.about,
     startY,
     defaultFontSize,
     false,
     false
   );
   pdf.setLineWidth(0.4); // Set the width of the line
   pdf.line(startX, startY + lineHeight, 180, startY + lineHeight);

   //Work Experience
   startY = addTextWithNextPage(
     "Work",
     startY + lineHeight * 2,
     increasedFontSize,
     true
   );
   const organizationValue = "Glory Global Solutions"; // Replace with your dynamic value
   const organizationText = `Organization: ${organizationValue}`;
   startY = addTextWithNextPage(
     organizationText,
     startY,
     defaultFontSize,
     false
   );

   const designationValue = "Field Engineer"; // Replace with your dynamic value
   const designationText = `Designation: ${designationValue}`;
   startY = addTextWithNextPage(
     designationText,
     startY,
     defaultFontSize,
     false
   );

   const fromDateValue = "2022"; // Replace with your dynamic value
   const fromDateText = `From Date: ${fromDateValue}`;
   startY = addTextWithNextPage(fromDateText, startY, defaultFontSize, false);

   const toDateValue = "2023"; // Replace with your dynamic value
   const toDateText = `To Date: ${toDateValue}`;
   startY = addTextWithNextPage(toDateText, startY, defaultFontSize, false);

   const descriptionValue = "Field Engineer"; // Replace with your dynamic value
   const descriptionText = `Job Description: ${descriptionValue}`;
   startY = addTextWithNextPage(
     descriptionText,
     startY,
     defaultFontSize,
     false
   );

   pdf.setLineWidth(0.4); // Set the width of the line
   pdf.line(startX, startY + lineHeight, 180, startY + lineHeight);

   //Project Work
   startY = addTextWithNextPage(
     "Project",
     startY + lineHeight * 2,
     increasedFontSize,
     true
   );
   const projectNameValue = "PMS"; // Replace with your dynamic value
   const projectNameText = `Project Name: ${projectNameValue}`;
   startY = addTextWithNextPage(
     projectNameText,
     startY,
     defaultFontSize,
     false
   );

   const projectDescriptionValue =
     "Completed a project on “Experimental investigation of fatigue life of suspension arm after shot peening” as a partial fulfillent to the course leading to Bachelors of Engineering.Completed a Mini project on “Laser Security System”. (B.E. Third Year Project)"; // Replace with your dynamic value
   const projectDescriptionText = `Project Description: ${projectDescriptionValue}`;
   startY = addTextWithNextPage(
     projectDescriptionText,
     startY,
     defaultFontSize,
     false
   );

   pdf.setLineWidth(0.4); // Set the width of the line
   pdf.line(startX, startY + lineHeight, 180, startY + lineHeight);

   //Education Details

   startY = addTextWithNextPage(
     "Education",
     startY + lineHeight * 2,
     increasedFontSize,
     true
   );

   const instituteValue = ""; // Replace with your dynamic value
   const instituteText = `Institute: ${instituteValue}`;
   startY = addTextWithNextPage(instituteText, startY, defaultFontSize, false);

   const degreeValue = "Java Developer"; // Replace with your dynamic value
   const degreeText = `Degree: ${degreeValue}`;
   startY = addTextWithNextPage(degreeText, startY, defaultFontSize, false);

   const fieldValue = "DAC"; // Replace with your dynamic value
   const fieldText = `Field: ${fieldValue}`;
   startY = addTextWithNextPage(fieldText, startY, defaultFontSize, false);

   const startDateValue = "25-09-2020"; // Replace with your dynamic value
   const startDateText = `Start Date: ${startDateValue}`;
   startY = addTextWithNextPage(startDateText, startY, defaultFontSize, false);

   const endDateValue = "31-09-2023"; // Replace with your dynamic value
   const endDateText = `End Date: ${endDateValue}`;
   startY = addTextWithNextPage(endDateText, startY, defaultFontSize, false);

   const percentageValue = "60%"; // Replace with your dynamic value
   const percentageText = `Percentage: ${percentageValue}`;
   startY = addTextWithNextPage(percentageText, startY, defaultFontSize, false);

   pdf.setLineWidth(0.4); // Set the width of the line
   pdf.line(startX, startY + lineHeight, 180, startY + lineHeight);

   //skills
   startY = addTextWithNextPage(
     "Skills",
     startY + lineHeight * 2,
     increasedFontSize,
     true
   );
   startY = addTextWithNextPage(
     candidateInfo.skills,
     startY,
     defaultFontSize,
     false
   );

   pdf.setLineWidth(0.4); // Set the width of the line
   pdf.line(startX, startY + lineHeight, 180, startY + lineHeight);

   //Personal info
   startY = addTextWithNextPage(
     "Personal Info",
     startY + lineHeight * 2,
     increasedFontSize,
     true,
     true
   );
   const phoneNoValue = candidateInfo.mobile; // Replace with your dynamic value
   const phoneNoText = `Phone No: ${phoneNoValue}`;
   startY = addTextWithNextPage(phoneNoText, startY, defaultFontSize, false);

   const emailValue = candidateInfo.email; // Replace with your dynamic value
   const emailText = `Email Id: ${emailValue}`;
   startY = addTextWithNextPage(emailText, startY, defaultFontSize, false);

   const nationalityValue = candidateInfo.nationality; // Replace with your dynamic value
   const nationalityText = `Nationality: ${nationalityValue}`;
   startY = addTextWithNextPage(
     nationalityText,
     startY,
     defaultFontSize,
     false
   );

   const genderValue = candidateInfo.gender; // Replace with your dynamic value
   const genderText = `Gender: ${genderValue}`;
   startY = addTextWithNextPage(genderText, startY, defaultFontSize, false);

   const languagesValue = candidateInfo.languages; // Replace with your dynamic value
   const languagesText = `Languages: ${languagesValue}`;
   startY = addTextWithNextPage(languagesText, startY, defaultFontSize, false);

   const hobbiesValue = candidateInfo.hobbies; // Replace with your dynamic value
   const hobbiesText = `Hobbies: ${hobbiesValue}`;
   startY = addTextWithNextPage(hobbiesText, startY, defaultFontSize, false);

   const achivementsValue = candidateInfo.achievements; // Replace with your dynamic value
   const achivementsText = `Achievements: ${achivementsValue}`;
   startY = addTextWithNextPage(
     achivementsText,
     startY,
     defaultFontSize,
     false
   );


    // Rest of the code...

    // Save the PDF
    pdf.save("resume.pdf");

    setLoading(false);
  };

  return (
    <div>
      <Button size="lg" disabled={isLoading} onClick={handleClick}>
        {isLoading ? "Loading…" : "Genrate Resume"}
      </Button>
    </div>
  );
};

export default ResumeGenerator;


