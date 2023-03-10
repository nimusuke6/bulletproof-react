import logo from '@/assets/logo.svg'
import { Head } from '@/components/Head'

export const Landing = () => {
  return (
    <>
      <Head description="Welcome to bulletproof react" />
      <div className="bg-white h-[100vh] flex items-center">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Bulletproof React</span>
          </h2>
          <img src={logo} alt="react" />
          <p>Showcasing Best Practices For Building React Applications</p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <button type="button">Get started</button>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="https://github.com/nimusuke6/bulletproof-react"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button">Github Repo</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
