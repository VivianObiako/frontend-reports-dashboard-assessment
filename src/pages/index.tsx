import TopSection from "@/components/reports/top-section"
import { SideBarLayout } from "../components/Layouts/sidebar-layout"
import SummaryCard from "@/components/reports/summary-card"
import { ParticipantsData } from "@/utils/mock/participant"

export const ReportsView: React.FC = () => {

  return (
    <>
      <SideBarLayout>
        <div className="h-full w-full text-black pt-5 text-[50px] xl:ml-[44px]">
          <TopSection data={ParticipantsData?.testInfo} />
          <SummaryCard data={ParticipantsData} />
          <div className="mt-8 flex w-full justify-between px-4 xl:px-10">
            <p className="text-sm text-primary-100">Last Updated: [Timestamp]</p>
            <p className="text-sm text-primary-100">Data Source: Peppermint</p>
          </div>
        </div>
      </SideBarLayout>
    </>
  )
}


export default function Reports() {
  return <ReportsView />
}
