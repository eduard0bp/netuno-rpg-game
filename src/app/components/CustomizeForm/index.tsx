'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useRouter } from 'next/navigation'
import { Gi3DHammer, GiAbdominalArmor } from 'react-icons/gi'
import * as yup from 'yup'

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
    Paladino: ['Lança', 'Escudo'],
    Atirador: ['Arma'],
    Guerreiro: ['Espada', 'Escudo'],
    Barbaro: ['Machado', 'Marreta'],
    Arqueiro: ['Arco']
  }

  const armorOptions: any = {
    Paladino: ['Armadura Pesada (Dano)', 'Armadura Muito Pesada (Tank)'],
    Atirador: ['Armadura Leve (Dano)', 'Armadura Média (Dano / Tank)'],
    Guerreiro: ['Armadura Média (Dano)', 'Armadura Pesada (Tank)'],
    Barbaro: ['Armadura Pesada (Dano)', 'Armadura Muito Pesada (Tank)'],
    Arqueiro: ['Armadura Muito Leve (Dano)', 'Armadura Leve (Dano)']
  }

  const validationSchema = yup.object().shape({
    weapon: yup.string().required('Selecione sua arma'),
    armor: yup.string().required('Selecione sua armadura')
  })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form className="text-amber-400 w-4/6 flex flex-col mt-8 justify-center gap-4">
          <div className="flex flex-col gap-2 items-center">
            <div className="flex gap-4 items-center border border-amber-400 h-[50px] w-full rounded-md pr-2">
              <div className="h-full w-[64px] bg-transparent flex items-center justify-center border-r border-amber-400 outline-none">
                <Gi3DHammer size={32} className="text-amber-400" />
              </div>
              <Field
                as="select"
                name="weapon"
                className="block w-full mt-1 p-4 rounded bg-transparent outline-none"
              >
                <option value="">Selecione sua arma</option>
                {selectedClass &&
                  weaponOptions[selectedClass].map((weapon: any) => (
                    <option key={weapon} value={weapon}>
                      {weapon}
                    </option>
                  ))}
              </Field>
            </div>
            <ErrorMessage
              name="weapon"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex gap-4 items-center border border-amber-400 h-[50px] w-full rounded-md pr-2">
              <div className="h-full w-[64px] bg-transparent flex items-center justify-center border-r border-amber-400 outline-none">
                <GiAbdominalArmor size={32} className="text-amber-400" />
              </div>
              <Field
                as="select"
                name="armor"
                className="block w-full mt-1 p-4 rounded bg-transparent outline-none"
              >
                <option value="">Selecione sua armadura</option>
                {selectedClass &&
                  armorOptions[selectedClass].map((armor: any) => (
                    <option key={armor} value={armor}>
                      {armor}
                    </option>
                  ))}
              </Field>
            </div>
            <ErrorMessage
              name="armor"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="">
            <label htmlFor="hairColor" className="block font-bold">
              Cor do Cabelo:
            </label>
            <Field
              type="color"
              name="hairColor"
              className="block w-full mt-1 p-2 border border-amber-400 rounded bg-transparent"
            />
            <ErrorMessage
              name="hairColor"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="">
            <label htmlFor="skinColor" className="block font-bold">
              Cor da Pele:
            </label>
            <Field
              type="color"
              name="skinColor"
              className="block w-full mt-1 p-2 border border-amber-400 rounded bg-transparent"
            />
            <ErrorMessage
              name="skinColor"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="flex w-full">
            <button
              type="submit"
              className="px-4 py-2 text-black rounded-md w-full mt-2 hover:outline bg-amber-400 hover:bg-transparent hover:outline-amber-400 hover:text-amber-400 font-bold disabled:opacity-75 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Escolhendo...' : 'Escolher personagem'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default CustomizeForm
