'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useRouter } from 'next/navigation'

const CustomizeForm: React.FC<{
  initialValues: any
  onSubmit: any
  selectedClass: any
}> = ({ initialValues, onSubmit, selectedClass }) => {
  const router = useRouter()

  const handleSubmit = (values: any) => {
    sessionStorage.setItem('customClassData', JSON.stringify(values))
    onSubmit(values)
    router.push('/mounts')
  }

  const weaponOptions: any = {
    Guerreiro: ['Espada', 'Escudo'],
    Arqueiro: ['Arco', 'Faca'],
    Paladino: ['Lança', 'Escudo']
  }

  const validateWeapon = (value: string) => {
    if (!value) {
      return 'Selecione uma arma'
    }
    if (selectedClass && weaponOptions[selectedClass].indexOf(value) === -1) {
      return `Arma inválida para a classe ${selectedClass}`
    }
    return undefined
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="mt-4">
        <div className="mb-2">
          <label htmlFor="weapon" className="block font-bold">
            Arma:
          </label>
          <Field
            as="select"
            name="weapon"
            validate={validateWeapon}
            className="block w-full mt-1 p-2 border rounded"
          >
            <option value="">Selecione</option>
            {selectedClass &&
              weaponOptions[selectedClass].map((weapon: any) => (
                <option key={weapon} value={weapon}>
                  {weapon}
                </option>
              ))}
          </Field>
          <ErrorMessage
            name="weapon"
            component="div"
            className="text-red-500"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="hairColor" className="block font-bold">
            Cor do Cabelo:
          </label>
          <Field
            type="color"
            name="hairColor"
            className="block w-full mt-1 p-2 border rounded"
          />
          <ErrorMessage
            name="hairColor"
            component="div"
            className="text-red-500"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Salvar
          </button>
        </div>
      </Form>
    </Formik>
  )
}

export default CustomizeForm
