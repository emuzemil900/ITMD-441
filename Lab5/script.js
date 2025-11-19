// ============================================
// RESUME BUILDER APPLICATION
// ============================================

/**
 * Wait for the page to fully load before running any code.
 * Check which page is loaded (form or resume) and initialize accordingly.
 */
document.addEventListener("DOMContentLoaded", function () {
  // Your code here
});

// ============================================
// FORM PAGE - Collect and Save Data
// ============================================

/**
 * When the form is submitted:
 * 1. Prevent the default form submission
 * 2. Collect all the form field values into an object
 * 3. Convert the object to JSON and save it in sessionStorage
 * 4. Redirect the user to resume.html
 */

/**
 * Form fields to collect:
 * - Personal: name, email, phone_number
 * - Education: degree, institute, graduation_year
 * - Experience: job_title, company, duration, responsibility
 * - Skills: languages (checkboxes), frameworks (checkboxes), version (select)
 * - Project: ProjectName, ProjectDescription
 */

// ============================================
// RESUME PAGE - Load and Display Data
// ============================================

/**
 * When the resume page loads:
 * 1. Get the saved data from sessionStorage
 * 2. Parse the JSON string back into an object
 * 3. Update each element on the page with the corresponding data
 *
 * If no data exists, redirect back to the form page.
 */

/**
 * Resume elements to update (use classes for easier selection):
 * - Header: .resume-name, .email-value, .phone-value
 * - Education: .degree-value, .institution-value, .year-value
 * - Experience: .job-title-value, .company-value, .duration-value, .responsibilities-list
 * - Skills: .languages-value, .frameworks-value, .version-control-value
 * - Project: .project-name-value, .project-description-value
 */
