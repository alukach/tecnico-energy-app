import { useStore } from "../../app/lib/store"
import Trash from "../icons/trash"
import Draw from "../icons/draw"
import Pick from "../icons/pick"

export const DrawControlPane: React.FC = () => {
  const { setIsDrawing, setAoi, selectedStudy, setShow3d, show3d } = useStore()
  const isDrawing = useStore(state => state.selectedStudy.isDrawing)
  const aoi = useStore(state => state.selectedStudy.aoi)

  const handleCheckboxChange = () => {
    setShow3d()
  }

  return (
    <div className="absolute bottom-4 left-4 bg-white p-4 rounded shadow-md opacity-90 flex justify-center gap-3">
      {selectedStudy.scale === "Building" && (
        <div className="items-center flex">
          <div
            className={`w-[50px] h-7 p-0.5 bg-slate-300 rounded-full justify-start items-center flex ${
              show3d ? "bg-[#075985]" : ""
            }`}
            onClick={handleCheckboxChange}
          >
            <div
              className={`w-6 h-6 bg-white rounded-full transform transition-transform ${
                show3d ? "translate-x-[23px]" : "translate-x-0"
              }`}
            ></div>
          </div>
          <div className="text-sky-800 text-base font-normal leading-normal ml-2">
            3D
          </div>
        </div>
      )}

      <div className="justify-center items-end flex gap-3">
        <button
          onClick={() => {
            setIsDrawing(false)
            // setAoi({ feature: undefined, bbox: [] })
          }}
          className={`hover:shadow-lg pt-3 pb-2 px-4 rounded-md border border-sky-800 text-sky-800 flex justify-center align-center ${
            isDrawing && "bg-slate-100"
          }`}
        >
          <Pick fill="#075985" />
          <div className="ml-2 text-sm">Pick</div>
        </button>
        <button
          onClick={() => {
            setIsDrawing(!isDrawing)
            setAoi({ feature: undefined, bbox: [] })
          }}
          className={`hover:shadow-lg pt-3 pb-2 px-4 rounded-md border border-sky-800 text-sky-800 flex justify-center align-center ${
            isDrawing && "bg-slate-100"
          }`}
        >
          <Draw fill="#075985" />
          <div className="ml-2 text-sm">Draw</div>
        </button>
        <button
          onClick={() => {
            setAoi({ feature: undefined, bbox: [] })
            setIsDrawing(false)
          }}
          className={`pt-3 pb-2 px-4 rounded-md border border-sky-800 text-sky-800 flex justify-center align-center ${
            aoi.feature ? "hover:shadow-lg" : "opacity-30 hover:cursor-default"
          }`}
        >
          <Trash fill="#075985" />
          <div className="ml-2 text-sm">Clear</div>
        </button>
      </div>
    </div>
  )
}
