import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="px-10">
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/e641943c-b829-492d-ad59-eea105b3ef7e.png")',
                }}
              >
                <div className="flex flex-col gap-2 text-left">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    Pioneer Drilling
                  </h1>
                  <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    {`We're an oil and gas drilling company based in San Antonio,
                    Texas. Our mission is to provide safe, efficient, and
                    cost-effective drilling solutions to our customers.`}
                  </h2>
                </div>
                <div className="flex-wrap gap-3 flex">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1b78c5] text-[#f8fafb] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                    <span className="truncate">Learn More</span>
                  </button>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#e8eef3] text-[#0e151b] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                    <span className="truncate">Contact Us</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className=" text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Our Services
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-1 gap-3 rounded-lg border border-[#d1dce6] bg-[#f8fafb] p-4 flex-col">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/stability/173e0dbd-8a63-43f9-b256-1389365f707d.png")',
            }}
          ></div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#0e151b] text-base font-bold leading-tight">
              Land Drilling
            </h2>
            <p className="text-[#507695] text-sm font-normal leading-normal">
              {`Safe, efficient, and cost-effective drilling solutions for onshore
              oil and gas exploration and production`}
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#d1dce6] bg-[#f8fafb] p-4 flex-col">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/stability/b19d32b9-731f-49fe-8a54-17cd031621e8.png")',
            }}
          ></div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#0e151b] text-base font-bold leading-tight">
              Logistics
            </h2>
            <p className="text-[#507695] text-sm font-normal leading-normal">
              Comprehensive logistics services to support the entire lifecycle
              of your drilling project
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#d1dce6] bg-[#f8fafb] p-4 flex-col">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/sdxl10/55786457-3309-4c67-9827-9a6cef194403.png")',
            }}
          ></div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#0e151b] text-base font-bold leading-tight">
              Equipment Rental
            </h2>
            <p className="text-[#507695] text-sm font-normal leading-normal">
              A broad range of drilling equipment for rent to meet the needs of
              any drilling operation
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#d1dce6] bg-[#f8fafb] p-4 flex-col">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/sdxl10/48045260-e90d-4460-96d9-bcbd64abdd10.png")',
            }}
          ></div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#0e151b] text-base font-bold leading-tight">
              Well Service
            </h2>
            <p className="text-[#507695] text-sm font-normal leading-normal">
              Professional well service solutions to help you optimize your
              drilling performance
            </p>
          </div>
        </div>
      </div>

      {/* <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded items-center justify-center p-4"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/9bcc55b5-cbc2-4e2d-89cf-bab7ac88b338.png")`,
                }}
              >
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    Driect Drilling &amp; Sawing
                  </h1>
                  <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    Your trusted partner for precision drilling and sawing
                    services.
                  </h2>
                </div>
                <Link href="/about-us">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#F4C753] text-[#141C24] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                    <span className="truncate">Learn More</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <main>
        <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Onshore
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {[
            {
              image:
                'https://cdn.usegalileo.ai/sdxl10/05b6893c-9c47-48ff-bf4c-41acea73329d.png',
              title: 'Shallow Wells',
              description: 'up to 5,000 feet',
            },
            {
              image:
                'https://cdn.usegalileo.ai/sdxl10/cafac12e-e5e1-42e9-a935-317fd74a426c.png',
              title: 'Medium-Depth Wells',
              description: '5,000 to 10,000 feet',
            },
            {
              image:
                'https://cdn.usegalileo.ai/sdxl10/6cf0fd81-4ec2-463b-a2cc-d475a540bd5b.png',
              title: 'Deep Wells',
              description: '10,000 to 20,000 feet',
            },
            {
              image:
                'https://cdn.usegalileo.ai/sdxl10/b14c08aa-2284-49a0-b805-1a5462f60d29.png',
              title: 'Extended-Reach Wells',
              description: 'more than 20,000 feet',
            },
          ].map((well, index) => (
            <div key={index} className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{ backgroundImage: `url(${well.image})` }}
              ></div>
              <div>
                <p className="text-[#0e141b] text-base font-medium leading-normal">
                  {well.title}
                </p>
                <p className="text-[#4f7396] text-sm font-normal leading-normal">
                  {well.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Offshore
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {[
            {
              image:
                'https://cdn.usegalileo.ai/sdxl10/0c11327f-284c-4d6e-bf60-dc6c29ba7f83.png',
              title: 'Shallow Water',
              description: 'up to 500 feet',
            },
            {
              image:
                'https://cdn.usegalileo.ai/sdxl10/e8dfdd85-059f-4a14-b0b7-305b616cb53d.png',
              title: 'Deep Water',
              description: '500 to 5,000 feet',
            },
            {
              image:
                'https://cdn.usegalileo.ai/sdxl10/02d88f54-a1ce-4dc5-9146-2cf21a7d63ae.png',
              title: 'Ultra-Deep Water',
              description: 'more than 5,000 feet',
            },
          ].map((well, index) => (
            <div key={index} className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{ backgroundImage: `url(${well.image})` }}
              ></div>
              <div>
                <p className="text-[#0e141b] text-base font-medium leading-normal">
                  {well.title}
                </p>
                <p className="text-[#4f7396] text-sm font-normal leading-normal">
                  {well.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Other
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {[
            {
              image:
                'https://cdn.usegalileo.ai/sdxl10/e108498e-1707-46e5-ae8f-da48d9332f1c.png',
              title: 'Unconventional Resources',
              description: 'shale, tight, heavy oil, oil sands',
            },
            {
              image:
                'https://cdn.usegalileo.ai/sdxl10/363b8daa-dcc8-4a98-8e98-57743822d4b0.png',
              title: 'International Projects',
              description: 'Latin America, Middle East, Asia',
            },
            {
              image:
                'https://cdn.usegalileo.ai/sdxl10/01de2b65-e3e2-4e1f-9677-8dc58adfd3be.png',
              title: 'Specialized Services',
              description: 'casing running, cementing, logging',
            },
          ].map((well, index) => (
            <div key={index} className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{ backgroundImage: `url(${well.image})` }}
              ></div>
              <div>
                <p className="text-[#0e141b] text-base font-medium leading-normal">
                  {well.title}
                </p>
                <p className="text-[#4f7396] text-sm font-normal leading-normal">
                  {well.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main> */}
    </div>
  );
}
