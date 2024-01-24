import { motion, useAnimation } from 'framer-motion'
import Router from 'next/router'
import { useEffect } from 'react'
import Navbar from 'src/helpers/common/Navbar'
import { useAuthContext } from 'src/helpers/context/AuthContext'
import LoginForm from 'src/helpers/profile/LoginForm'
import checkLogin from 'src/helpers/utils/checkLogin'
import storage from 'src/helpers/utils/storage'
import useSWR from 'swr'

const SignInLayout = () => {
  const { user } = useAuthContext()
  const isLoggedIn = checkLogin(user)

  useEffect(() => {
    if (isLoggedIn) {
      Router.push('/')
    }
  }, [isLoggedIn])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} className="scroll-smooth">
      <Navbar />
      <LoginForm />
    </motion.div>
  )
}

export default SignInLayout
