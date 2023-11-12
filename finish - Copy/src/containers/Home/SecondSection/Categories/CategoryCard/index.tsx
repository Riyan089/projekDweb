import Image from 'next/image'

const CategoryCard = () => {
  return (
    <article className="flex flex-col w-[182px]">
      <figure className="relative w-full h-[179px] rounded-xl overflow-hidden mb-5">
        <Image
          src="/assets/home/python.png"
          alt="python"
          layout="fill"
          objectFit="cover"
          objectPosition="right"
        />
      </figure>
      <p className="text-heading-3 text-gray-100 font-bold">Information Technology</p>
    </article>
  )
}

const CategoryCard1 = () => {
  return (
    <article className="flex flex-col w-[182px]">
      <figure className="relative w-full h-[179px] rounded-xl overflow-hidden mb-5">
        <Image
          src="/assets/home/mathD.jpeg"
          alt="python"
          layout="fill"
          objectFit="cover"
          objectPosition="right"
        />
      </figure>
      <p className="text-heading-3 text-gray-100 font-bold">Information Technology</p>
    </article>
  )
}

export {CategoryCard, CategoryCard1}
