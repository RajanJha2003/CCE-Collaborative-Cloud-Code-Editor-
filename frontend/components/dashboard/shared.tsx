import { Virtualbox } from "@/lib/types";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

const DashboardSharedWithMe = ({
  virtualboxes,
}: {
  virtualboxes: Virtualbox[];
}) => {
  return (
    <div className="grow p-4 flex flex-col">
      <div className="text-xl font-medium mb-8">Shared with Me</div>
      <div className="grow w-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Virtualbox Name</TableHead>
              <TableHead>Shared By</TableHead>
              <TableHead>Sent On</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {virtualboxes.map((virtualbox) => (
              <TableRow key={virtualbox.id}>
                <TableCell>
                  <div className="font-medium flex items-center">
                    <Image
                      src={
                        virtualbox.type === "react"
                          ? "/project-icons/react.svg"
                          : "/project-icons/node-svg"
                      }
                      width={20}
                      height={20}
                      className="mr-2"
                      alt=""
                    />
                    {virtualbox.name}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <div className="mr-2" />
                    Rajan Jha
                  </div>
                </TableCell>
                <TableCell>{new Date().toLocaleString()}</TableCell>
                <TableCell className="text-right">
                  <Link href={`/code/${virtualbox.id}`}>
                    <Button>
                      Open <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DashboardSharedWithMe;
