import LandingPageLayout from "../Components/Layout/LandingPageLayout";

function Contact() {
    return (
        <div>
            <p>Contact Page</p>
        </div>
    );
}

Contact.layout = (page) => <LandingPageLayout children={page} />;
export default Contact;
