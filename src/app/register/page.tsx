'use client'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useRouter } from 'next/navigation'
import * as yup from 'yup'

const Register = () => {
  const router = useRouter()

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: ''
  }

  const validationSchema = yup.object({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
    password: yup
      .string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres')
      .required('Campo obrigatório'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null!], 'As senhas não conferem')
      .required('Campo obrigatório'),
    dateOfBirth: yup
      .date()
      .nullable()
      .required('Campo obrigatório')
      .max(new Date(), 'Data inválida')
  })

  const handleSubmit = (values: typeof initialValues) => {
    sessionStorage.setItem('user', JSON.stringify(values))
    console.log('Dados salvos:', values)
    router.push('/')
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="space-y-4">
        <div>
          <label htmlFor="name">Nome:</label>
          <Field
            type="text"
            id="name"
            name="name"
            className="block w-full mt-1 text-black"
          />
          <ErrorMessage name="name" component="p" className="text-red-500" />
        </div>

        <div>
          <label htmlFor="email">E-mail:</label>
          <Field
            type="email"
            id="email"
            name="email"
            className="block w-full mt-1 text-black"
          />
          <ErrorMessage name="email" component="p" className="text-red-500" />
        </div>

        <div>
          <label htmlFor="password">Senha:</label>
          <Field
            type="password"
            id="password"
            name="password"
            className="block w-full mt-1 text-black"
          />
          <ErrorMessage
            name="password"
            component="p"
            className="text-red-500"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirmar Senha:</label>
          <Field
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="block w-full mt-1 text-black"
          />
          <ErrorMessage
            name="confirmPassword"
            component="p"
            className="text-red-500"
          />
        </div>

        <div>
          <label htmlFor="age">Data de Nascimento:</label>
          <Field
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            className="block w-full mt-1 text-black"
          />
          <ErrorMessage name="age" component="p" className="text-red-500" />
        </div>

        <div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Cadastrar
          </button>
        </div>
      </Form>
    </Formik>
  )
}

export default Register
