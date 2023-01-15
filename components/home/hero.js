import Animation from '../home/animation'

import Link from "next/link"

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요.
          <br className="hidden lg:inline-block"/>캠핑 고! 사이트입니다.
        </h2>
        <p className="mb-8 leading-relaxed">
        유소년에게서 우리의 끓는 꾸며 보라. 어디 광야에서 무엇을 꽃이 그들은 때문이다. 곳으로 피고, 같이, 풀밭에 불어 굳세게 바이며, 보내는 봄바람이다. 끝에 우리의 청춘의 때문이다. 싹이 생의 이상의 가는 인간에 구할 가슴에 사막이다. 그들에게 이상 황금시대의 더운지라 군영과 이상의 얼마나 꽃 자신과 것이다. 같이 소금이라 품었기 힘차게 것이다. 두기 피고, 내려온 가슴이 없는 얼음과 되려니와, 아름다우냐? 청춘이 청춘 인간은 황금시대의 수 피어나는 타오르고 거친 노년에게서 칼이다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects" className="btn-project">프로젝트 보러가기</Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation/>
      </div>
    </>
    
  )
}