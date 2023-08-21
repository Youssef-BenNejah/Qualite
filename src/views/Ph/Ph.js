import React, { useEffect, useState } from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { DocsCallout } from 'src/components'

const Charts = () => {
  const random = () => Math.round(Math.random() * 100)
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);
 
  return (
    <CRow>
      <CCol xs={12}>
        <DocsCallout
          name="Chart"
          href="components/chart"
          content="React wrapper component for Chart.js 3.0, the most popular charting library."
        />
      </CCol>
     
      <CCol xs={12}>
        <CCard className="mb-6">
          <CCardHeader>Ph Chart</CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: [time.toLocaleTimeString()],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    data: [0,7,14],
                  },
                  // {
                  //   label: 'My Second dataset',
                  //   backgroundColor: 'rgba(151, 187, 205, 0.2)',
                  //   borderColor: 'rgba(151, 187, 205, 1)',
                  //   pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                  //   pointBorderColor: '#fff',
                  //   data: [random(), random(), random(), random(), random(), random(), random()],
                  // },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
     
    </CRow>
  )
}

export default Charts
