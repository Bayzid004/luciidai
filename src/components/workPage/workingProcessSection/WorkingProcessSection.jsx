import Image from 'next/image';

const workingSections = [
  {
    title: 'Driveways',
    description:
      'Concrete interlocking is the perfect driveway material because it is versatile, durable, easy to repair and comes in a wide variety of textures, sizes and colours. We build beautiful and durable interlock driveways that will add instant curb appeal and value to your home.',
    mainImage: '/workingProcessSectionMainImage1.png',
    thumbnails: [
      '/workingProcessSectionFirstImage1.png',
      '/workingProcessSectionFirstImage2.png',
      '/workingProcessSectionFirstImage3.png',
    ],
  },
  {
    title: 'Patios & Walkways',
    description:
      'Let us help you enhance the charm of your patio by building a beautiful and functional outdoor oasis using concrete interlocking stones and slabs. Concrete interlocking patios and walkways are available in a wide variety of textures, sizes and colours.',
    mainImage: '/workingProcessSectionMainImage2.png',
    thumbnails: [
      '/workingProcessSectionSecondImage1.png',
      '/workingProcessSectionSecondImage2.png',
      '/workingProcessSectionSecondImage3.png',
    ],
  },
  {
    title: 'Stairs',
    description:
      'Interlock stairs allow for a smooth transition between the different elevations of your home and yard. They are also an essential part of most front porch renovations. We build solid stairs installed on sloping or landscaped grading, in every style and size to suit your preferences.',
    mainImage: '/workingProcessSectionMainImage3.png',
    thumbnails: [
      '/workingProcessSectionThirdImage1.png',
      '/workingProcessSectionThirdImage2.png',
      '/workingProcessSectionThirdImage3.png',
    ],
  },
  {
    title: 'Curbs & Walls',
    description:
      'Curbs and walls create a clean and sturdy edge for planting areas and garden changes. They are meant to define a landscape, contain flower beds, and prevent soil from eroding. These long-lasting structures can be decorative as well as functional. We build beautiful and elegant interlocking retaining walls, curbs, and steps.',
    mainImage: '/workingProcessSectionMainImage4.png',
    thumbnails: [
      '/workingProcessSectionFourthImage1.png',
      '/workingProcessSectionFourthImage2.png',
      '/workingProcessSectionFourthImage3.png',
    ],
  },
  {
    title: 'Wood Structures',
    description:
      'We design and build decks, pergolas, gazebos and other wooden structures for affordable value. Choose from pressure-treated, cedar or maintenance-free composite options.',
    mainImage: '/workingProcessSectionMainImage5.png',
    thumbnails: [
      '/workingProcessSectionFifthImage1.png',
      '/workingProcessSectionFifthImage2.png',
      '/workingProcessSectionFifthImage3.png',
    ],
  },
];

const WorkingProcessSections = () => {
  return (
    <div className="w-full bg-[#f8f8f8] py-10 px-4">
      <div className="flex flex-col items-center gap-10 max-w-[1200px] mx-auto">
        {workingSections.map((section, idx) => {
          const isEven = idx % 2 !== 0;
          return (
            <section
              key={idx}
              className={`w-full bg-white p-4 shadow rounded-md flex flex-col lg:flex-row ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Main Image */}
              <div className="relative w-full lg:w-[307px] h-[300px] lg:h-[395px] flex-shrink-0 mb-4 lg:mb-0">
                <Image
                  src={section.mainImage}
                  alt={section.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              {/* Text & Thumbnails */}
              <div
                className={`flex flex-col justify-between w-full ${
                  isEven ? 'lg:mr-6' : 'lg:ml-6'
                }`}
              >
                {/* Text */}
                <div>
                  <h2 className="text-lg font-bold mb-2">{section.title}</h2>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    {section.description}
                  </p>
                </div>

                {/* Thumbnails */}
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <h3 className="font-semibold text-[15px] leading-tight whitespace-nowrap">
                    See At A <br /> Glance:
                  </h3>
                  <div className="flex gap-2 flex-wrap">
                    {section.thumbnails.map((thumb, tIdx) => (
                      <div
                        key={tIdx}
                        className="relative w-[100px] sm:w-[150px] md:w-[207px] h-[80px] sm:h-[110px] md:h-[159px]"
                      >
                        <Image
                          src={thumb}
                          alt={`Thumbnail ${tIdx + 1}`}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default WorkingProcessSections;
