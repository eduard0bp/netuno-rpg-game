'use client'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useRouter } from 'next/navigation'
import * as yup from 'yup'
import bg from '../../../public/images/bg_login.jpg'
import { MdEmail } from 'react-icons/md'
import { BiUser } from 'react-icons/bi'
import { FaKey } from 'react-icons/fa'
import { BsCalendarDateFill } from 'react-icons/bs'

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
      .test('age', 'Você deve ter mais de 18 anos para criar uma conta!', function (value) {
        const birthDate = new Date(value)
        const today = new Date()
        const age = today.getFullYear() - birthDate.getFullYear()
        const monthDiff = today.getMonth() - birthDate.getMonth()
        if (
          monthDiff < 0 ||
          (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
          return age - 1 >= 18
        }
        return age >= 18
      })
  })

  const handleSubmit = (values: typeof initialValues) => {
    sessionStorage.setItem('user', JSON.stringify(values))
    console.log('Dados salvos:', values)
    router.push('/')
  }

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div
        className="absolute w-full h-full"
        style={{
          backgroundImage: `url(${bg.src})`,
          filter: 'brightness(80%) blur(1px)',
          zIndex: -1
        }}
      />
      <div className="h-fit w-[600px] bg-black bg-opacity-70 flex flex-col items-center p-8 justify-center">
        <h1 className="text-amber-400 font-bold text-4xl mb-2">Cadastre-se</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="h-full flex flex-col justify-center items-center gap-4 w-[500px]">
            <div className="flex flex-col gap-2 items-center">
              <div className="flex gap-4 items-center border h-[50px] rounded-md">
                <div className="h-full w-[64px] bg-gray-400 flex items-center justify-center">
                  <BiUser size={32} className="text-amber-400" />
                </div>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full bg-transparent focus:outline-none text-gray-400"
                  placeholder="Digite seu nome"
                />
              </div>
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-500"
              />
            </div>

            <div className="flex flex-col gap-2 items-center">
              <div className="flex gap-4 items-center border h-[50px] rounded-md">
                <div className="h-full w-[64px] bg-gray-400 flex items-center justify-center">
                  <MdEmail size={32} className="text-amber-400" />
                </div>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full bg-transparent focus:outline-none text-gray-400"
                  placeholder="Digite seu e-mail"
                />
              </div>
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500"
              />
            </div>

            <div className="flex flex-col gap-2 items-center">
              <div className="flex gap-4 items-center border h-[50px] rounded-md">
                <div className="h-full w-[64px] bg-gray-400 flex items-center justify-center">
                  <FaKey size={32} className="text-amber-400" />
                </div>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="block w-full bg-transparent focus:outline-none text-gray-400"
                  placeholder="Digite sua senha"
                />
              </div>
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500"
              />
            </div>

            <div className="flex flex-col gap-2 items-center">
              <div className="flex gap-4 items-center border h-[50px] rounded-md">
                <div className="h-full w-[64px] bg-gray-400 flex items-center justify-center">
                  <FaKey size={32} className="text-amber-400" />
                </div>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="block w-full bg-transparent focus:outline-none text-gray-400"
                  placeholder="Digite sua senha"
                />
              </div>
              <ErrorMessage
                name="confirmPassword"
                component="p"
                className="text-red-500"
              />
            </div>

            <div className="flex flex-col gap-2 items-center">
              <div className="flex gap-4 items-center border h-[50px] w-[277px] rounded-md">
                <div className="h-full w-[64px] bg-gray-400 flex items-center justify-center">
                  <BsCalendarDateFill size={32} className="text-amber-400" />
                </div>
                <Field
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  className="block w-full bg-transparent focus:outline-none text-gray-400"
                />
              </div>
              <ErrorMessage
                name="dateOfBirth"
                component="p"
                className="text-red-500"
              />
            </div>

            <div>
              <button
                type="submit"
                className="px-4 py-2 bg-gray-400 text-white rounded-md w-[270px] outline outline-gray-700 hover:bg-transparent"
              >
                Cadastrar
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Register
