'use client'
import React, { useState, useEffect } from 'react'
import Table from '@components/Table'
import TableHeader from '@components/TableHeader'
import TableBody from '@components/TableBody'
import TableCell from '@components/TableCell'
import TableRow from '@components/TableRow'
import TableFooter from '@components/TableFooter'
import TableContainer from '@components/TableContainer'
import Badge from '@components/Badge'
import Avatar from '@components/Avatar'
import Button from '@components/Button'
import Pagination from '@components/Pagination'
import { PlusIcon, LinkIcon, EmailIcon, MeIcon } from 'src/app/icons'
import tableClient from '../../utils/TableClient'
import tableProject from '../../utils/TableProject'

const NumberFormatRupiah = ({ value }) => {
  const formattedValue = value.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });

  return <span>{formattedValue}</span>;
};

export default function Dashboard() {
  const [pageTable1, setPageTable1] = useState(1)
  const [pageTable2, setPageTable2] = useState(1)

  const [dataTable1, setDataTable1] = useState([])
  const [dataTable2, setDataTable2] = useState([])

  const resultsPerPage = 10
  const totalResultClient = tableClient.length
  const totalResultProject = tableProject.length

  function onPageChangeTable1(p) {
    setPageTable1(p)
  }

  function onPageChangeTable2(p) {
    setPageTable2(p)
  }

  useEffect(() => {
    setDataTable1(tableClient.slice((pageTable1 - 1) * resultsPerPage, pageTable1 * resultsPerPage))
  }, [pageTable1])

  useEffect(() => {
    setDataTable2(tableProject.slice((pageTable2 - 1) * resultsPerPage, pageTable2 * resultsPerPage))
  }, [pageTable2])

  return (
    <div>
      <div className='block lg:flex justify-between bg-blue-50 py-4 px-4 mb-6'>
        <div className="w-2/3 space-y-1 items-start justify-start">
          <p className="text-3xl font-semibold leading-10 text-[#142030]">Welcome, Ani</p>
          <p className="text-sm leading-normal text-[#677a96]">Manage all of your clients and projects.</p>
        </div>
        <div className='block lg:flex mt-2 lg:mt-0 w-1/3 gap-5 items-center justify-end'>
          <Button className="bg-blue-400">
            <span className="ml-2" aria-hidden="true">
              <PlusIcon />
            </span>
            Add Client
          </Button>
          <Button className="active:bg-gray-50 hover:bg-gray-100 focus:ring focus:ring-gray-300 bg-gray-50 border border-gray-900">
            <span className="ml-2" aria-hidden="true">
              <PlusIcon color='#142030' />
            </span>
            <span className='text-sm font-semibold leading-relaxed text-center text-gray-900'>Project Budget Plan</span>
          </Button>
        </div>
      </div>
      <div className='px-4'>
        <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white mb-4">Data Management</h1>
        <TableContainer title="List of Clients" className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>No.</TableCell>
                <TableCell>Client Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Website/Email</TableCell>
                <TableCell>PIC Name</TableCell>
                <TableCell>PIC Number</TableCell>
                <TableCell>Status</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {dataTable1.map((client, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <span className="text-sm">{client.no}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{client.client_name}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{client.address}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{client.phone}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">
                      {client.type === 'email' ? (
                        <span className='inline-flex gap-1 align-middle items-center'><EmailIcon /> {client.type_data}</span>
                      ) : (
                        <span className='inline-flex gap-1 align-middle items-center'><LinkIcon /> {client.type_data}</span>
                      )}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{client.pic_name}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{client.pic_number}</span>
                  </TableCell>
                  <TableCell>
                    <Badge type={client.status === 'active' ? 'success' : 'danger'}>{client.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TableFooter>
            <Pagination
              totalResults={totalResultClient}
              resultsPerPage={resultsPerPage}
              onChange={onPageChangeTable1}
              label="Table navigation"
            />
          </TableFooter>
        </TableContainer>
        <TableContainer title="List of Projects" className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>No.</TableCell>
                <TableCell>Client Name</TableCell>
                <TableCell>Project</TableCell>
                <TableCell>Job No.</TableCell>
                <TableCell>Project Manager</TableCell>
                <TableCell>Project Value</TableCell>
                <TableCell>Budget Plan</TableCell>
                <TableCell>Status</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {dataTable2.map((project, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <span className="text-sm">{project.no}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{project.project}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{project.no_job}</span>
                  </TableCell>
                  <TableCell>
                    <span className='text-sm inline-flex gap-1 align-middle items-center'><MeIcon /> {project.project_manager}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm"><NumberFormatRupiah value={project.project_value} /></span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm"><NumberFormatRupiah value={project.budget} /></span>
                  </TableCell>
                  <TableCell>
                    <Badge type={project.status === 'approve' ? 'success' : 'danger'}>{project.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TableFooter>
            <Pagination
              totalResults={totalResultProject}
              resultsPerPage={resultsPerPage}
              onChange={onPageChangeTable2}
              label="Table navigation"
            />
          </TableFooter>
        </TableContainer>
      </div>
    </div>
  )
}