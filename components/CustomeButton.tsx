"use client";
import React from "react";
import { CustomeButtonProps } from "@/types";
import Image from "next/image";
function CustomeButton({
  textStyles,
  rightIcon,
  title,
  containerStyle,
  handleClick,
  btnType,
}: CustomeButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="arrow_left"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
}

export default CustomeButton;
