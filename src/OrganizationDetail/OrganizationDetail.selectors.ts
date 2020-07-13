import { createSelector } from 'reselect'
import { IStore } from '../store'

const getOrganizationDetail = ({ organizationDetail }: IStore) => organizationDetail

export const getIsFetching = createSelector(
  [getOrganizationDetail],
  ({ isFetching }) => isFetching
)

export const getOrganizationInfo = createSelector(
  [getOrganizationDetail],
  ({ organizationInfo }) => organizationInfo
)

export const getRepositories = createSelector(
  [getOrganizationDetail],
  ({ repositories }) => repositories
)
