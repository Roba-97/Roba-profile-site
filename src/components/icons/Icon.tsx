"use client";

import { addIcon, Icon as OfflineIcon } from "@iconify/react/offline";
import type { ComponentProps } from "react";
import { iconData } from "@/lib/icons";

for (const [name, data] of Object.entries(iconData)) {
  addIcon(name, data);
}

export function Icon(props: ComponentProps<typeof OfflineIcon>) {
  return <OfflineIcon {...props} />;
}
