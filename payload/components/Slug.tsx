"use client";
import React, { useEffect } from "react";
import {
  useField,
  useWatchForm,
  TextInput,
  useForm,
} from "payload/components/forms";

import { useDocumentInfo } from "payload/components/utilities";
// import { formatSlug, formatSlugString } from "../utilities/format.utils";
import { TextInputProps } from "payload/dist/admin/components/forms/field-types/Text/Input";

interface SlugProps {
  path?: string;
  name?: string;
  label?: string;
  hooks?: TextInputProps["hooks"];
  access?: TextInputProps["access"];
  admin?: TextInputProps["admin"];
}

export const Slug = ({ path, ...props }: SlugProps) => {
  const { id } = useDocumentInfo();
  const { getDataByPath } = useWatchForm();
  const { value = "", setValue } = useField({ path });

  const title: string = getDataByPath("title");

  const { name, label, hooks, access, admin } = props;

  useEffect(() => {
    // do not update the slug once it has been created by checking that `id` exists
    // if you wanted to dangerously update the slug (potentially breaking links), you could add an updateSlug checkbox field for more control
    if (!id) {
      const slug = title?.replace(/ /g, "-").toLowerCase() ?? value;

      setValue(slug);
    }
  }, [title, value, setValue, id]);

  return (
    <div>
      <span>
        <TextInput
          path={path}
          name={name}
          value={value as string}
          label={label}
          hooks={hooks}
          access={access}
          admin={admin}
        />
      </span>
    </div>
  );
};
