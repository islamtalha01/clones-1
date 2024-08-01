'use client'

// import { useDisclosure } from '@nextui-org/react'
// import LoginModel from '../components/LoginModel'
import Discover from './discover/page'

// import DeployButton from "../components/DeployButton";
// import AuthButton from "../components/AuthButton";
// import { createClient } from '../utils/supabase/server'

// const supabase = createClient()

{
  /* <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
<DeployButton />
{isSupabaseConnected && <AuthButton />}
</div> */
}

function Home() {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure()

  // const canInitSupabaseClient = () => {
  //   // This function is just for the interactive tutorial.
  //   // Feel free to remove it once you have Supabase connected.
  //   try {
  //     createClient()
  //     return true
  //   } catch (e) {
  //     return false
  //   }
  // }

  // const isSupabaseConnected = canInitSupabaseClient()

  return (
    <>
      <div className='flex flex-col my-[159px] mx-[365px] w-full'>
        <div className='flex flex-col justify-center items-center  w-full'>
          <Discover />
        </div>
      </div>

      {/* <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <DeployButton />
            {isSupabaseConnected && <AuthButton />}
          </div>
        </nav>

        <div className="flex-1 flex flex-col gap-20 max-w-4xl px-3">
          <Header />
          <main className="flex-1 flex flex-col gap-6">
            <h2 className="font-bold text-4xl mb-4">Next steps</h2>
            {isSupabaseConnected ? (
              <SignUpUserSteps />
            ) : (
              <ConnectSupabaseSteps />
            )}
          </main>
        </div>
      </div> */}
    </>
  )
}

export default Home
