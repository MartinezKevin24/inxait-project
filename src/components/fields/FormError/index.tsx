import React, { ReactNode } from "react";
import { ErrorMessage } from "formik";

export function ErrorRenderer({
  children,
}: { children?: ReactNode }) {
  return (
    <span className="flex items-center gap-1 text-red-500">
      <span className="text-sm">{children}</span>
    </span>
  );
}

export default function FormError({ name }: { name: string }) {
  return <ErrorMessage name={name} component={ErrorRenderer} className="text-red text-sm" />;
}