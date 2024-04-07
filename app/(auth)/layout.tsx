
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = false;
  // const router = useRouter()

  return (
    <>
      {
        isAuthenticated ? (
          //  router.push('/')
          <></>
        ): (
          <>
            <section
              className='
                h-screen
                w-screen
                flex
                flex-col
                justify-center
                items-center
                py-10
              '
            >
              {children}
            </section>
          </>
        )
      }
    </>
  )
}

export default AuthLayout