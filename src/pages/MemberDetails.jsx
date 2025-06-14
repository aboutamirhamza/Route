import React from 'react'
import { useParams, useSearchParams } from 'react-router'

function MemberDetails() {
    const {memberId, memberName} = useParams();
    const [search] = useSearchParams();
  return (
    <>
    <div><h1>MemberDetails</h1></div>
    <div><h2>MemberID: {memberId}</h2></div>
    <div><h2>MemberName: {memberName}</h2></div>
    <div><h2>SortBy: {search.get("sortBy")}</h2></div>
    <div><h2>SortDirection: {search.get("sortDirection")}</h2></div>
    </>
  )
}

export default MemberDetails