"use client";
import React, { useState, useId } from "react";
import { SelectLayoutContainer } from "../SelectLayoutContainer";
import Icons from "../icons/icons";
import { Button } from "@/components/buttons/Button";

const guestTypes = {
  adult: "adult",
  child: "child",
  kid: "kid",
};

const SelectItem = ({ label, description, formId }) => {
  const [peopleCount, setPeopleCount] = useState(0);
  const checkPeopleCount = (pepleCount) => {
    if (0 > pepleCount) return;
    setPeopleCount(pepleCount);
  };
  return (
    <div className="flex justify-center flex-row justify-between p-5">
      <div className="flex flex-col gap-2">
        <p className="block font-bold text-xl">{label}</p>
        <p className="block text-gray-400">{description}</p>
      </div>
      <div className="flex flex-row justify-center justify-items-center gap-3">
        <div className="bg-white rounded-full flex border-solid justify-center justify-items-center">
          <Button
            size="sm"
            outline="outlineSemi"
            additionalClass="rounded-full px-0 h-12 w-12 p-2"
            onClick={() => checkPeopleCount(peopleCount - 1)}
            type="button">
            <Icons type="RemoveIcon" size="large" color="primary" />
          </Button>
        </div>
        <div className="flex justify-center justify-items-center text-center items-center">
          {/* 폼요청 보내기 위한 hidden input */}
          <input type="hidden" name={formId} value={peopleCount} />
          <p className="min-w-10 font-semibold text-xl">{peopleCount}</p>
        </div>
        <div className="bg-white rounded-full flex border-solid justify-center justify-items-center">
          <Button
            size="sm"
            outline="outlineSemi"
            additionalClass="rounded-full px-0 h-12 w-12 p-2"
            onClick={() => checkPeopleCount(peopleCount + 1)}
            type="button">
            <Icons type="AddIcon" size="large" color="primary" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default function SelectPeople() {
  const id = useId();

  const formIdArray = Object.keys(guestTypes)
    .map((val) => {
      return { [val]: `${id}-${val}` };
    })
    .reduce((acc, cur) => {
      return { ...acc, ...cur };
    }, {});

  const formAction = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const adultCount = formData.get(formIdArray[guestTypes.adult]);
    console.log("form feat");
    console.log(adultCount);
  };
  return (
    <>
      <SelectLayoutContainer>
        <div className="rounded-xl shadow-md p-4">
          <h3 className="font-bold text-2xl p-2">게스트는 누구인가요?</h3>
          <form action="" onSubmit={formAction}>
            <SelectItem
              label="성인"
              description="13세 이상"
              formId={formIdArray[guestTypes.adult]}
            />
            <SelectItem
              label="어린이"
              description="3세 이상 13세 미만"
              formId={formIdArray[guestTypes.child]}
            />
            <SelectItem
              label="유아"
              description="2세 이하"
              formId={formIdArray[guestTypes.kid]}
            />
            {/* {submit 버튼으로 요청 보내면됨} */}
            <button type="submit"></button>
          </form>
        </div>
      </SelectLayoutContainer>
    </>
  );
}
