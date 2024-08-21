import { SideBarLayout } from "../components/Layouts/sidebar-layout"

export const ReportsView: React.FC = () => {

  return (
    <>
      <SideBarLayout>
        <div className="h-full w-full text-black pt-5 text-[50px] xl:ml-[44px]">
          hey!
        </div>
      </SideBarLayout>
    </>
  )
}


export default function Reports() {
  return <ReportsView />
}
