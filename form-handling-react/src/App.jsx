import RegistrationForm from "./components/RegistrationForm"; // For Controlled Components
import FormikForm from "./components/formikForm"; // For Formik

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <FormikForm /> {/* Swap with RegistrationForm to see controlled version */}
    </div>
  );
}

export default App;
