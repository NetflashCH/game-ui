import { MouseEventHandler, useState } from "react";
import { currency, first, group, shield, key, tracky, main } from "./assets";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./assets/store/store";
import { deleteMission } from "./assets/store/Data";

const imgData: Record<string, string> = { shield, key, tracky };
function App() {
	const store = useSelector((state: RootState) => state.data);

	const dispatch = useDispatch();

	const toggleButtonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.currentTarget.classList.toggle("toggleButton");
	};

	return (
		<>
			<div className="absolute w-[460px] h-[584px] border-t-[6px] border-[#AC2B20] rounded-t-[4px] bg-[#09283B] overflow-y-scroll  px-[1rem] py-[1.3rem] right-[5%] bottom-0">
				<h1 className="text-[#fff] font-bold text-[1.5rem] mb-[.5rem]">
					MY JOBS
				</h1>
				<div className="flex items-center justify-between py-[.7rem] px-[1rem] bg-[#AC2B20] mb-[1rem]">
					<div className="flex items-center gap-[1rem]">
						<img src={first} alt="first" />
						<h1 className="text-[22px] font-bold text-white">OFF DUTY</h1>
					</div>
					<button
						type="button"
						className="w-[55px] h-[29px] bg-[#0A3654] rounded-[50rem] flex items-center justify-end cursor-pointer"
						onClick={toggleButtonHandler}
					>
						<div className="w-[20px] h-[20px] bg-[#fff] rounded-[50rem] mx-[5px]"></div>
					</button>
				</div>

				<div className="flex items-center justify-between py-[.7rem] gap-[1rem] flex-wrap  ">
					{store.data.map((data, index) => {
						return (
							<li
								key={index}
								className="text-[22px] font-bold text-white flex-[.5] bg-[#0A3654] list-none p-[1rem] max-w-[204.691px] rounded-[4px] cursor-pointer"
							>
								<div className="flex items-center gap-[1rem] pb-[.5rem] border-b-[1px] border-[#104F7A]">
									<img
										src={imgData[data.img]}
										alt="first"
										className="mt-[-.55rem]"
									/>
									<div className="grid line-height-[22px]">
										<h1 className="text-[20px] font-bold text-white uppercase">
											{data.type}
										</h1>
										<span className="text-[#fff] text-[13px] capitalize font-[400]">
											{data.role}
										</span>
									</div>
								</div>
								<div className="flex items-center gap-[.5rem] pt-[1rem]">
									<img src={currency} alt="first" width={16} />
									<span className="text-[#fff] text-[15px] capitalize ">
										{data.money}{" "}
									</span>
								</div>
								<div className="flex items-center gap-[.5rem]">
									<img src={group} alt="first" width={16} />
									<span className="text-[#fff] text-[15px] capitalize ">
										{data.kills}
									</span>
								</div>

								<div className="flex items-center gap-[.5rem] mt-[1rem]">
									<button
										type="button"
										className="btn w-full bg-[#09283B] text-white  px-[.5rem] py-[.4rem] text-[14px] flex place-content-center"
									>
										SELECT
									</button>

									<button
										type="button"
										className="btn w-full bg-[#AC2B20] text-white  px-[.5rem] py-[.4rem] text-[14px] place-content-center"
										onClick={() => {
											dispatch(deleteMission(index));
										}}
									>
										DELETE
									</button>
								</div>
							</li>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default App;
