import BreadcrumbCom from "../BreadcrumbCom";

export default function PageTitle({ title, breadcrumb = [] }) {
  return (
    <div
      style={{
        backgroundImage: `url(/assets/images/page-title-banner.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="page-title-wrapper w-full h-[173px] py-10"
    >
      <div className="container-x mx-auto">
        <div className="mb-5">
          <BreadcrumbCom paths={breadcrumb} />
        </div>
        <div className="flex justify-center">
          <h1 className="text-3xl font-semibold text-qblack capitalize">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
