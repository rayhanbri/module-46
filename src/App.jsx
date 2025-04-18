
import './App.css'
import ControlledField from './components/ControlledField/ControlledField'
import FamilyTree from './components/FamilyTree/FamilyTree'
import FormAction from './components/FormAction/FormAction'
import PorductManagement from './components/PorductManagement/PorductManagement'
import SimpleForm from './components/SimpleForm/SimpleForm'
import HookForm from './HookForm/HookForm'
import UnControlled from './UnControlled/UnControlled'

function App() {
  

  return (
    <>
     
      <h1>Explore Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledField></ControlledField> */}
      
      
       {/* <UnControlled></UnControlled> */}
       {/* <HookForm></HookForm>
        */}
        {/* <PorductManagement></PorductManagement>
         */}
         <FamilyTree></FamilyTree>
    </>
  )
}

export default App
