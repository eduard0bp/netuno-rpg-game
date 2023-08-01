'use client'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useRouter } from 'next/navigation'
import * as yup from 'yup'
import bg from '../../public/images/bg_login.jpg'
import { FaKey } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Home() {
  const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema = yup.object({
    email: yup
      .string()
      .email('E-mail inválido')
      .required('E-mail obrigatório!'),
    password: yup.string().required('Senha obrigatória!')
  })

  const router = useRouter()

  const handleLogin = (values: typeof initialValues, setFieldError: any) => {
    const storedUser = JSON.parse(sessionStorage.getItem('user') || '{}')
    if (
      values.email === storedUser.email &&
      values.password === storedUser.password
    ) {
      sessionStorage.setItem('authenticated', 'true')
      router.push('/characters')
    } else {
      const loginAttempts = sessionStorage.getItem('loginAttempts') || 0
      sessionStorage.setItem('loginAttempts', String(Number(loginAttempts) + 1))

      const remainingAttempts = 3 - Number(loginAttempts) - 1
      if (remainingAttempts === 0) {
        router.push('/game-over')
        sessionStorage.clear()
      } else {
        alert(
          `E-mail ou senha inválidos. Você possui ${remainingAttempts} tentativas restantes.`
        )
        setFieldError('password', 'E-mail ou senha inválidos.')
      }
    }
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
      <div className="h-[400px] w-[600px] bg-black bg-opacity-70 flex flex-col items-center p-8 justify-center">
        <h1 className="text-amber-400 font-bold text-4xl mb-2">
          Netuno RPG Game
        </h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {() => (
            <Form className="h-full flex flex-col justify-center items-center gap-4 w-[500px]">
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

              <div className="flex flex-col gap-4 items-center">
                <div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gray-400 text-white rounded-md w-[270px] outline outline-gray-700 hover:bg-transparent"
                  >
                    Entrar
                  </button>
                </div>

                <div>
                  <button
                    type="button"
                    className="px-4 py-2 bg-transparent text-amber-400 outline rounded-md w-[270px]"
                    onClick={() => {
                      router.push('/register')
                    }}
                  >
                    Criar conta
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
