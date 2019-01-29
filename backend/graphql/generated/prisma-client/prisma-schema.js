module.exports = {
        typeDefs: /* GraphQL */ `type AggregateColor {
  count: Int!
}

type AggregateImage {
  count: Int!
}

type AggregatePage {
  count: Int!
}

type AggregateProject {
  count: Int!
}

type AggregateProjectImage {
  count: Int!
}

type AggregateStyle {
  count: Int!
}

type AggregateTechnology {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Color {
  id: ID!
  uid: String
  shade: Shade!
  type: ColorType!
  hex: String!
  rgb: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ColorConnection {
  pageInfo: PageInfo!
  edges: [ColorEdge]!
  aggregate: AggregateColor!
}

input ColorCreateInput {
  uid: String
  shade: Shade
  type: ColorType
  hex: String!
  rgb: String
}

input ColorCreateManyInput {
  create: [ColorCreateInput!]
  connect: [ColorWhereUniqueInput!]
}

input ColorCreateOneInput {
  create: ColorCreateInput
  connect: ColorWhereUniqueInput
}

type ColorEdge {
  node: Color!
  cursor: String!
}

enum ColorOrderByInput {
  id_ASC
  id_DESC
  uid_ASC
  uid_DESC
  shade_ASC
  shade_DESC
  type_ASC
  type_DESC
  hex_ASC
  hex_DESC
  rgb_ASC
  rgb_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ColorPreviousValues {
  id: ID!
  uid: String
  shade: Shade!
  type: ColorType!
  hex: String!
  rgb: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ColorScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  uid: String
  uid_not: String
  uid_in: [String!]
  uid_not_in: [String!]
  uid_lt: String
  uid_lte: String
  uid_gt: String
  uid_gte: String
  uid_contains: String
  uid_not_contains: String
  uid_starts_with: String
  uid_not_starts_with: String
  uid_ends_with: String
  uid_not_ends_with: String
  shade: Shade
  shade_not: Shade
  shade_in: [Shade!]
  shade_not_in: [Shade!]
  type: ColorType
  type_not: ColorType
  type_in: [ColorType!]
  type_not_in: [ColorType!]
  hex: String
  hex_not: String
  hex_in: [String!]
  hex_not_in: [String!]
  hex_lt: String
  hex_lte: String
  hex_gt: String
  hex_gte: String
  hex_contains: String
  hex_not_contains: String
  hex_starts_with: String
  hex_not_starts_with: String
  hex_ends_with: String
  hex_not_ends_with: String
  rgb: String
  rgb_not: String
  rgb_in: [String!]
  rgb_not_in: [String!]
  rgb_lt: String
  rgb_lte: String
  rgb_gt: String
  rgb_gte: String
  rgb_contains: String
  rgb_not_contains: String
  rgb_starts_with: String
  rgb_not_starts_with: String
  rgb_ends_with: String
  rgb_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ColorScalarWhereInput!]
  OR: [ColorScalarWhereInput!]
  NOT: [ColorScalarWhereInput!]
}

type ColorSubscriptionPayload {
  mutation: MutationType!
  node: Color
  updatedFields: [String!]
  previousValues: ColorPreviousValues
}

input ColorSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ColorWhereInput
  AND: [ColorSubscriptionWhereInput!]
  OR: [ColorSubscriptionWhereInput!]
  NOT: [ColorSubscriptionWhereInput!]
}

enum ColorType {
  PRIMARY
  SECONDARY
  SUCCESS
  DANGER
  WARNING
  INFO
  LIGHT
  DARK
  MUTED
  WHITE
  MISC
}

input ColorUpdateDataInput {
  uid: String
  shade: Shade
  type: ColorType
  hex: String
  rgb: String
}

input ColorUpdateInput {
  uid: String
  shade: Shade
  type: ColorType
  hex: String
  rgb: String
}

input ColorUpdateManyDataInput {
  uid: String
  shade: Shade
  type: ColorType
  hex: String
  rgb: String
}

input ColorUpdateManyInput {
  create: [ColorCreateInput!]
  update: [ColorUpdateWithWhereUniqueNestedInput!]
  upsert: [ColorUpsertWithWhereUniqueNestedInput!]
  delete: [ColorWhereUniqueInput!]
  connect: [ColorWhereUniqueInput!]
  disconnect: [ColorWhereUniqueInput!]
  deleteMany: [ColorScalarWhereInput!]
  updateMany: [ColorUpdateManyWithWhereNestedInput!]
}

input ColorUpdateManyMutationInput {
  uid: String
  shade: Shade
  type: ColorType
  hex: String
  rgb: String
}

input ColorUpdateManyWithWhereNestedInput {
  where: ColorScalarWhereInput!
  data: ColorUpdateManyDataInput!
}

input ColorUpdateOneRequiredInput {
  create: ColorCreateInput
  update: ColorUpdateDataInput
  upsert: ColorUpsertNestedInput
  connect: ColorWhereUniqueInput
}

input ColorUpdateWithWhereUniqueNestedInput {
  where: ColorWhereUniqueInput!
  data: ColorUpdateDataInput!
}

input ColorUpsertNestedInput {
  update: ColorUpdateDataInput!
  create: ColorCreateInput!
}

input ColorUpsertWithWhereUniqueNestedInput {
  where: ColorWhereUniqueInput!
  update: ColorUpdateDataInput!
  create: ColorCreateInput!
}

input ColorWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  uid: String
  uid_not: String
  uid_in: [String!]
  uid_not_in: [String!]
  uid_lt: String
  uid_lte: String
  uid_gt: String
  uid_gte: String
  uid_contains: String
  uid_not_contains: String
  uid_starts_with: String
  uid_not_starts_with: String
  uid_ends_with: String
  uid_not_ends_with: String
  shade: Shade
  shade_not: Shade
  shade_in: [Shade!]
  shade_not_in: [Shade!]
  type: ColorType
  type_not: ColorType
  type_in: [ColorType!]
  type_not_in: [ColorType!]
  hex: String
  hex_not: String
  hex_in: [String!]
  hex_not_in: [String!]
  hex_lt: String
  hex_lte: String
  hex_gt: String
  hex_gte: String
  hex_contains: String
  hex_not_contains: String
  hex_starts_with: String
  hex_not_starts_with: String
  hex_ends_with: String
  hex_not_ends_with: String
  rgb: String
  rgb_not: String
  rgb_in: [String!]
  rgb_not_in: [String!]
  rgb_lt: String
  rgb_lte: String
  rgb_gt: String
  rgb_gte: String
  rgb_contains: String
  rgb_not_contains: String
  rgb_starts_with: String
  rgb_not_starts_with: String
  rgb_ends_with: String
  rgb_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ColorWhereInput!]
  OR: [ColorWhereInput!]
  NOT: [ColorWhereInput!]
}

input ColorWhereUniqueInput {
  id: ID
  uid: String
}

scalar DateTime

type Image {
  id: ID!
  uid: String
  url: String!
  title: String!
  caption: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ImageConnection {
  pageInfo: PageInfo!
  edges: [ImageEdge]!
  aggregate: AggregateImage!
}

input ImageCreateInput {
  uid: String
  url: String!
  title: String!
  caption: String
}

input ImageCreateOneInput {
  create: ImageCreateInput
  connect: ImageWhereUniqueInput
}

type ImageEdge {
  node: Image!
  cursor: String!
}

enum ImageOrderByInput {
  id_ASC
  id_DESC
  uid_ASC
  uid_DESC
  url_ASC
  url_DESC
  title_ASC
  title_DESC
  caption_ASC
  caption_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ImagePreviousValues {
  id: ID!
  uid: String
  url: String!
  title: String!
  caption: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ImageSubscriptionPayload {
  mutation: MutationType!
  node: Image
  updatedFields: [String!]
  previousValues: ImagePreviousValues
}

input ImageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ImageWhereInput
  AND: [ImageSubscriptionWhereInput!]
  OR: [ImageSubscriptionWhereInput!]
  NOT: [ImageSubscriptionWhereInput!]
}

input ImageUpdateDataInput {
  uid: String
  url: String
  title: String
  caption: String
}

input ImageUpdateInput {
  uid: String
  url: String
  title: String
  caption: String
}

input ImageUpdateManyMutationInput {
  uid: String
  url: String
  title: String
  caption: String
}

input ImageUpdateOneInput {
  create: ImageCreateInput
  update: ImageUpdateDataInput
  upsert: ImageUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ImageWhereUniqueInput
}

input ImageUpdateOneRequiredInput {
  create: ImageCreateInput
  update: ImageUpdateDataInput
  upsert: ImageUpsertNestedInput
  connect: ImageWhereUniqueInput
}

input ImageUpsertNestedInput {
  update: ImageUpdateDataInput!
  create: ImageCreateInput!
}

input ImageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  uid: String
  uid_not: String
  uid_in: [String!]
  uid_not_in: [String!]
  uid_lt: String
  uid_lte: String
  uid_gt: String
  uid_gte: String
  uid_contains: String
  uid_not_contains: String
  uid_starts_with: String
  uid_not_starts_with: String
  uid_ends_with: String
  uid_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  caption: String
  caption_not: String
  caption_in: [String!]
  caption_not_in: [String!]
  caption_lt: String
  caption_lte: String
  caption_gt: String
  caption_gte: String
  caption_contains: String
  caption_not_contains: String
  caption_starts_with: String
  caption_not_starts_with: String
  caption_ends_with: String
  caption_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ImageWhereInput!]
  OR: [ImageWhereInput!]
  NOT: [ImageWhereInput!]
}

input ImageWhereUniqueInput {
  id: ID
  uid: String
}

scalar Long

type Mutation {
  createColor(data: ColorCreateInput!): Color!
  updateColor(data: ColorUpdateInput!, where: ColorWhereUniqueInput!): Color
  updateManyColors(data: ColorUpdateManyMutationInput!, where: ColorWhereInput): BatchPayload!
  upsertColor(where: ColorWhereUniqueInput!, create: ColorCreateInput!, update: ColorUpdateInput!): Color!
  deleteColor(where: ColorWhereUniqueInput!): Color
  deleteManyColors(where: ColorWhereInput): BatchPayload!
  createImage(data: ImageCreateInput!): Image!
  updateImage(data: ImageUpdateInput!, where: ImageWhereUniqueInput!): Image
  updateManyImages(data: ImageUpdateManyMutationInput!, where: ImageWhereInput): BatchPayload!
  upsertImage(where: ImageWhereUniqueInput!, create: ImageCreateInput!, update: ImageUpdateInput!): Image!
  deleteImage(where: ImageWhereUniqueInput!): Image
  deleteManyImages(where: ImageWhereInput): BatchPayload!
  createPage(data: PageCreateInput!): Page!
  updatePage(data: PageUpdateInput!, where: PageWhereUniqueInput!): Page
  updateManyPages(data: PageUpdateManyMutationInput!, where: PageWhereInput): BatchPayload!
  upsertPage(where: PageWhereUniqueInput!, create: PageCreateInput!, update: PageUpdateInput!): Page!
  deletePage(where: PageWhereUniqueInput!): Page
  deleteManyPages(where: PageWhereInput): BatchPayload!
  createProject(data: ProjectCreateInput!): Project!
  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project
  updateManyProjects(data: ProjectUpdateManyMutationInput!, where: ProjectWhereInput): BatchPayload!
  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!
  deleteProject(where: ProjectWhereUniqueInput!): Project
  deleteManyProjects(where: ProjectWhereInput): BatchPayload!
  createProjectImage(data: ProjectImageCreateInput!): ProjectImage!
  updateProjectImage(data: ProjectImageUpdateInput!, where: ProjectImageWhereUniqueInput!): ProjectImage
  updateManyProjectImages(data: ProjectImageUpdateManyMutationInput!, where: ProjectImageWhereInput): BatchPayload!
  upsertProjectImage(where: ProjectImageWhereUniqueInput!, create: ProjectImageCreateInput!, update: ProjectImageUpdateInput!): ProjectImage!
  deleteProjectImage(where: ProjectImageWhereUniqueInput!): ProjectImage
  deleteManyProjectImages(where: ProjectImageWhereInput): BatchPayload!
  createStyle(data: StyleCreateInput!): Style!
  updateStyle(data: StyleUpdateInput!, where: StyleWhereUniqueInput!): Style
  updateManyStyles(data: StyleUpdateManyMutationInput!, where: StyleWhereInput): BatchPayload!
  upsertStyle(where: StyleWhereUniqueInput!, create: StyleCreateInput!, update: StyleUpdateInput!): Style!
  deleteStyle(where: StyleWhereUniqueInput!): Style
  deleteManyStyles(where: StyleWhereInput): BatchPayload!
  createTechnology(data: TechnologyCreateInput!): Technology!
  updateTechnology(data: TechnologyUpdateInput!, where: TechnologyWhereUniqueInput!): Technology
  updateManyTechnologies(data: TechnologyUpdateManyMutationInput!, where: TechnologyWhereInput): BatchPayload!
  upsertTechnology(where: TechnologyWhereUniqueInput!, create: TechnologyCreateInput!, update: TechnologyUpdateInput!): Technology!
  deleteTechnology(where: TechnologyWhereUniqueInput!): Technology
  deleteManyTechnologies(where: TechnologyWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Page {
  id: ID!
  uid: String
  route: String!
  style: Style!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PageConnection {
  pageInfo: PageInfo!
  edges: [PageEdge]!
  aggregate: AggregatePage!
}

input PageCreateInput {
  uid: String
  route: String!
  style: StyleCreateOneInput!
}

input PageCreateOneInput {
  create: PageCreateInput
  connect: PageWhereUniqueInput
}

type PageEdge {
  node: Page!
  cursor: String!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

enum PageOrderByInput {
  id_ASC
  id_DESC
  uid_ASC
  uid_DESC
  route_ASC
  route_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PagePreviousValues {
  id: ID!
  uid: String
  route: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PageSubscriptionPayload {
  mutation: MutationType!
  node: Page
  updatedFields: [String!]
  previousValues: PagePreviousValues
}

input PageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PageWhereInput
  AND: [PageSubscriptionWhereInput!]
  OR: [PageSubscriptionWhereInput!]
  NOT: [PageSubscriptionWhereInput!]
}

input PageUpdateDataInput {
  uid: String
  route: String
  style: StyleUpdateOneRequiredInput
}

input PageUpdateInput {
  uid: String
  route: String
  style: StyleUpdateOneRequiredInput
}

input PageUpdateManyMutationInput {
  uid: String
  route: String
}

input PageUpdateOneRequiredInput {
  create: PageCreateInput
  update: PageUpdateDataInput
  upsert: PageUpsertNestedInput
  connect: PageWhereUniqueInput
}

input PageUpsertNestedInput {
  update: PageUpdateDataInput!
  create: PageCreateInput!
}

input PageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  uid: String
  uid_not: String
  uid_in: [String!]
  uid_not_in: [String!]
  uid_lt: String
  uid_lte: String
  uid_gt: String
  uid_gte: String
  uid_contains: String
  uid_not_contains: String
  uid_starts_with: String
  uid_not_starts_with: String
  uid_ends_with: String
  uid_not_ends_with: String
  route: String
  route_not: String
  route_in: [String!]
  route_not_in: [String!]
  route_lt: String
  route_lte: String
  route_gt: String
  route_gte: String
  route_contains: String
  route_not_contains: String
  route_starts_with: String
  route_not_starts_with: String
  route_ends_with: String
  route_not_ends_with: String
  style: StyleWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [PageWhereInput!]
  OR: [PageWhereInput!]
  NOT: [PageWhereInput!]
}

input PageWhereUniqueInput {
  id: ID
  uid: String
}

type Project {
  id: ID!
  uid: String
  name: String!
  description: String!
  page: Page!
  projectImages(where: ProjectImageWhereInput, orderBy: ProjectImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProjectImage!]
  tags: [String!]!
  technologies(where: TechnologyWhereInput, orderBy: TechnologyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Technology!]
  startDate: DateTime
  finishDate: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ProjectConnection {
  pageInfo: PageInfo!
  edges: [ProjectEdge]!
  aggregate: AggregateProject!
}

input ProjectCreateInput {
  uid: String
  name: String!
  description: String!
  page: PageCreateOneInput!
  projectImages: ProjectImageCreateManyWithoutProjectInput
  tags: ProjectCreatetagsInput
  technologies: TechnologyCreateManyInput
  startDate: DateTime
  finishDate: DateTime
}

input ProjectCreateOneWithoutProjectImagesInput {
  create: ProjectCreateWithoutProjectImagesInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreatetagsInput {
  set: [String!]
}

input ProjectCreateWithoutProjectImagesInput {
  uid: String
  name: String!
  description: String!
  page: PageCreateOneInput!
  tags: ProjectCreatetagsInput
  technologies: TechnologyCreateManyInput
  startDate: DateTime
  finishDate: DateTime
}

type ProjectEdge {
  node: Project!
  cursor: String!
}

type ProjectImage {
  id: ID!
  uid: String
  project: Project!
  image: Image!
  type: ProjectImageType!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ProjectImageConnection {
  pageInfo: PageInfo!
  edges: [ProjectImageEdge]!
  aggregate: AggregateProjectImage!
}

input ProjectImageCreateInput {
  uid: String
  project: ProjectCreateOneWithoutProjectImagesInput!
  image: ImageCreateOneInput!
  type: ProjectImageType!
}

input ProjectImageCreateManyWithoutProjectInput {
  create: [ProjectImageCreateWithoutProjectInput!]
  connect: [ProjectImageWhereUniqueInput!]
}

input ProjectImageCreateWithoutProjectInput {
  uid: String
  image: ImageCreateOneInput!
  type: ProjectImageType!
}

type ProjectImageEdge {
  node: ProjectImage!
  cursor: String!
}

enum ProjectImageOrderByInput {
  id_ASC
  id_DESC
  uid_ASC
  uid_DESC
  type_ASC
  type_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProjectImagePreviousValues {
  id: ID!
  uid: String
  type: ProjectImageType!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ProjectImageScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  uid: String
  uid_not: String
  uid_in: [String!]
  uid_not_in: [String!]
  uid_lt: String
  uid_lte: String
  uid_gt: String
  uid_gte: String
  uid_contains: String
  uid_not_contains: String
  uid_starts_with: String
  uid_not_starts_with: String
  uid_ends_with: String
  uid_not_ends_with: String
  type: ProjectImageType
  type_not: ProjectImageType
  type_in: [ProjectImageType!]
  type_not_in: [ProjectImageType!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ProjectImageScalarWhereInput!]
  OR: [ProjectImageScalarWhereInput!]
  NOT: [ProjectImageScalarWhereInput!]
}

type ProjectImageSubscriptionPayload {
  mutation: MutationType!
  node: ProjectImage
  updatedFields: [String!]
  previousValues: ProjectImagePreviousValues
}

input ProjectImageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProjectImageWhereInput
  AND: [ProjectImageSubscriptionWhereInput!]
  OR: [ProjectImageSubscriptionWhereInput!]
  NOT: [ProjectImageSubscriptionWhereInput!]
}

enum ProjectImageType {
  PRIMARY
  HEADER
  SECONDARY
  LAZY
}

input ProjectImageUpdateInput {
  uid: String
  project: ProjectUpdateOneRequiredWithoutProjectImagesInput
  image: ImageUpdateOneRequiredInput
  type: ProjectImageType
}

input ProjectImageUpdateManyDataInput {
  uid: String
  type: ProjectImageType
}

input ProjectImageUpdateManyMutationInput {
  uid: String
  type: ProjectImageType
}

input ProjectImageUpdateManyWithoutProjectInput {
  create: [ProjectImageCreateWithoutProjectInput!]
  delete: [ProjectImageWhereUniqueInput!]
  connect: [ProjectImageWhereUniqueInput!]
  disconnect: [ProjectImageWhereUniqueInput!]
  update: [ProjectImageUpdateWithWhereUniqueWithoutProjectInput!]
  upsert: [ProjectImageUpsertWithWhereUniqueWithoutProjectInput!]
  deleteMany: [ProjectImageScalarWhereInput!]
  updateMany: [ProjectImageUpdateManyWithWhereNestedInput!]
}

input ProjectImageUpdateManyWithWhereNestedInput {
  where: ProjectImageScalarWhereInput!
  data: ProjectImageUpdateManyDataInput!
}

input ProjectImageUpdateWithoutProjectDataInput {
  uid: String
  image: ImageUpdateOneRequiredInput
  type: ProjectImageType
}

input ProjectImageUpdateWithWhereUniqueWithoutProjectInput {
  where: ProjectImageWhereUniqueInput!
  data: ProjectImageUpdateWithoutProjectDataInput!
}

input ProjectImageUpsertWithWhereUniqueWithoutProjectInput {
  where: ProjectImageWhereUniqueInput!
  update: ProjectImageUpdateWithoutProjectDataInput!
  create: ProjectImageCreateWithoutProjectInput!
}

input ProjectImageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  uid: String
  uid_not: String
  uid_in: [String!]
  uid_not_in: [String!]
  uid_lt: String
  uid_lte: String
  uid_gt: String
  uid_gte: String
  uid_contains: String
  uid_not_contains: String
  uid_starts_with: String
  uid_not_starts_with: String
  uid_ends_with: String
  uid_not_ends_with: String
  project: ProjectWhereInput
  image: ImageWhereInput
  type: ProjectImageType
  type_not: ProjectImageType
  type_in: [ProjectImageType!]
  type_not_in: [ProjectImageType!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ProjectImageWhereInput!]
  OR: [ProjectImageWhereInput!]
  NOT: [ProjectImageWhereInput!]
}

input ProjectImageWhereUniqueInput {
  id: ID
  uid: String
}

enum ProjectOrderByInput {
  id_ASC
  id_DESC
  uid_ASC
  uid_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  startDate_ASC
  startDate_DESC
  finishDate_ASC
  finishDate_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProjectPreviousValues {
  id: ID!
  uid: String
  name: String!
  description: String!
  tags: [String!]!
  startDate: DateTime
  finishDate: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ProjectSubscriptionPayload {
  mutation: MutationType!
  node: Project
  updatedFields: [String!]
  previousValues: ProjectPreviousValues
}

input ProjectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProjectWhereInput
  AND: [ProjectSubscriptionWhereInput!]
  OR: [ProjectSubscriptionWhereInput!]
  NOT: [ProjectSubscriptionWhereInput!]
}

input ProjectUpdateInput {
  uid: String
  name: String
  description: String
  page: PageUpdateOneRequiredInput
  projectImages: ProjectImageUpdateManyWithoutProjectInput
  tags: ProjectUpdatetagsInput
  technologies: TechnologyUpdateManyInput
  startDate: DateTime
  finishDate: DateTime
}

input ProjectUpdateManyMutationInput {
  uid: String
  name: String
  description: String
  tags: ProjectUpdatetagsInput
  startDate: DateTime
  finishDate: DateTime
}

input ProjectUpdateOneRequiredWithoutProjectImagesInput {
  create: ProjectCreateWithoutProjectImagesInput
  update: ProjectUpdateWithoutProjectImagesDataInput
  upsert: ProjectUpsertWithoutProjectImagesInput
  connect: ProjectWhereUniqueInput
}

input ProjectUpdatetagsInput {
  set: [String!]
}

input ProjectUpdateWithoutProjectImagesDataInput {
  uid: String
  name: String
  description: String
  page: PageUpdateOneRequiredInput
  tags: ProjectUpdatetagsInput
  technologies: TechnologyUpdateManyInput
  startDate: DateTime
  finishDate: DateTime
}

input ProjectUpsertWithoutProjectImagesInput {
  update: ProjectUpdateWithoutProjectImagesDataInput!
  create: ProjectCreateWithoutProjectImagesInput!
}

input ProjectWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  uid: String
  uid_not: String
  uid_in: [String!]
  uid_not_in: [String!]
  uid_lt: String
  uid_lte: String
  uid_gt: String
  uid_gte: String
  uid_contains: String
  uid_not_contains: String
  uid_starts_with: String
  uid_not_starts_with: String
  uid_ends_with: String
  uid_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  page: PageWhereInput
  projectImages_every: ProjectImageWhereInput
  projectImages_some: ProjectImageWhereInput
  projectImages_none: ProjectImageWhereInput
  technologies_every: TechnologyWhereInput
  technologies_some: TechnologyWhereInput
  technologies_none: TechnologyWhereInput
  startDate: DateTime
  startDate_not: DateTime
  startDate_in: [DateTime!]
  startDate_not_in: [DateTime!]
  startDate_lt: DateTime
  startDate_lte: DateTime
  startDate_gt: DateTime
  startDate_gte: DateTime
  finishDate: DateTime
  finishDate_not: DateTime
  finishDate_in: [DateTime!]
  finishDate_not_in: [DateTime!]
  finishDate_lt: DateTime
  finishDate_lte: DateTime
  finishDate_gt: DateTime
  finishDate_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ProjectWhereInput!]
  OR: [ProjectWhereInput!]
  NOT: [ProjectWhereInput!]
}

input ProjectWhereUniqueInput {
  id: ID
  uid: String
}

type Query {
  color(where: ColorWhereUniqueInput!): Color
  colors(where: ColorWhereInput, orderBy: ColorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Color]!
  colorsConnection(where: ColorWhereInput, orderBy: ColorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ColorConnection!
  image(where: ImageWhereUniqueInput!): Image
  images(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image]!
  imagesConnection(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ImageConnection!
  page(where: PageWhereUniqueInput!): Page
  pages(where: PageWhereInput, orderBy: PageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Page]!
  pagesConnection(where: PageWhereInput, orderBy: PageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PageConnection!
  project(where: ProjectWhereUniqueInput!): Project
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project]!
  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
  projectImage(where: ProjectImageWhereUniqueInput!): ProjectImage
  projectImages(where: ProjectImageWhereInput, orderBy: ProjectImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProjectImage]!
  projectImagesConnection(where: ProjectImageWhereInput, orderBy: ProjectImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectImageConnection!
  style(where: StyleWhereUniqueInput!): Style
  styles(where: StyleWhereInput, orderBy: StyleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Style]!
  stylesConnection(where: StyleWhereInput, orderBy: StyleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StyleConnection!
  technology(where: TechnologyWhereUniqueInput!): Technology
  technologies(where: TechnologyWhereInput, orderBy: TechnologyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Technology]!
  technologiesConnection(where: TechnologyWhereInput, orderBy: TechnologyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TechnologyConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum Shade {
  LIGHT
  DARK
}

enum Shape {
  JAGGED
  ROUND
  SQUARE
}

type Style {
  id: ID!
  uid: String
  colors(where: ColorWhereInput, orderBy: ColorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Color!]
  shape: Shape!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type StyleConnection {
  pageInfo: PageInfo!
  edges: [StyleEdge]!
  aggregate: AggregateStyle!
}

input StyleCreateInput {
  uid: String
  colors: ColorCreateManyInput
  shape: Shape
}

input StyleCreateOneInput {
  create: StyleCreateInput
  connect: StyleWhereUniqueInput
}

type StyleEdge {
  node: Style!
  cursor: String!
}

enum StyleOrderByInput {
  id_ASC
  id_DESC
  uid_ASC
  uid_DESC
  shape_ASC
  shape_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StylePreviousValues {
  id: ID!
  uid: String
  shape: Shape!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type StyleSubscriptionPayload {
  mutation: MutationType!
  node: Style
  updatedFields: [String!]
  previousValues: StylePreviousValues
}

input StyleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StyleWhereInput
  AND: [StyleSubscriptionWhereInput!]
  OR: [StyleSubscriptionWhereInput!]
  NOT: [StyleSubscriptionWhereInput!]
}

input StyleUpdateDataInput {
  uid: String
  colors: ColorUpdateManyInput
  shape: Shape
}

input StyleUpdateInput {
  uid: String
  colors: ColorUpdateManyInput
  shape: Shape
}

input StyleUpdateManyMutationInput {
  uid: String
  shape: Shape
}

input StyleUpdateOneRequiredInput {
  create: StyleCreateInput
  update: StyleUpdateDataInput
  upsert: StyleUpsertNestedInput
  connect: StyleWhereUniqueInput
}

input StyleUpsertNestedInput {
  update: StyleUpdateDataInput!
  create: StyleCreateInput!
}

input StyleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  uid: String
  uid_not: String
  uid_in: [String!]
  uid_not_in: [String!]
  uid_lt: String
  uid_lte: String
  uid_gt: String
  uid_gte: String
  uid_contains: String
  uid_not_contains: String
  uid_starts_with: String
  uid_not_starts_with: String
  uid_ends_with: String
  uid_not_ends_with: String
  colors_every: ColorWhereInput
  colors_some: ColorWhereInput
  colors_none: ColorWhereInput
  shape: Shape
  shape_not: Shape
  shape_in: [Shape!]
  shape_not_in: [Shape!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [StyleWhereInput!]
  OR: [StyleWhereInput!]
  NOT: [StyleWhereInput!]
}

input StyleWhereUniqueInput {
  id: ID
  uid: String
}

type Subscription {
  color(where: ColorSubscriptionWhereInput): ColorSubscriptionPayload
  image(where: ImageSubscriptionWhereInput): ImageSubscriptionPayload
  page(where: PageSubscriptionWhereInput): PageSubscriptionPayload
  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload
  projectImage(where: ProjectImageSubscriptionWhereInput): ProjectImageSubscriptionPayload
  style(where: StyleSubscriptionWhereInput): StyleSubscriptionPayload
  technology(where: TechnologySubscriptionWhereInput): TechnologySubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Technology {
  id: ID!
  uid: String
  name: String!
  image: Image
  color: Color!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type TechnologyConnection {
  pageInfo: PageInfo!
  edges: [TechnologyEdge]!
  aggregate: AggregateTechnology!
}

input TechnologyCreateInput {
  uid: String
  name: String!
  image: ImageCreateOneInput
  color: ColorCreateOneInput!
}

input TechnologyCreateManyInput {
  create: [TechnologyCreateInput!]
  connect: [TechnologyWhereUniqueInput!]
}

type TechnologyEdge {
  node: Technology!
  cursor: String!
}

enum TechnologyOrderByInput {
  id_ASC
  id_DESC
  uid_ASC
  uid_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TechnologyPreviousValues {
  id: ID!
  uid: String
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input TechnologyScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  uid: String
  uid_not: String
  uid_in: [String!]
  uid_not_in: [String!]
  uid_lt: String
  uid_lte: String
  uid_gt: String
  uid_gte: String
  uid_contains: String
  uid_not_contains: String
  uid_starts_with: String
  uid_not_starts_with: String
  uid_ends_with: String
  uid_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [TechnologyScalarWhereInput!]
  OR: [TechnologyScalarWhereInput!]
  NOT: [TechnologyScalarWhereInput!]
}

type TechnologySubscriptionPayload {
  mutation: MutationType!
  node: Technology
  updatedFields: [String!]
  previousValues: TechnologyPreviousValues
}

input TechnologySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TechnologyWhereInput
  AND: [TechnologySubscriptionWhereInput!]
  OR: [TechnologySubscriptionWhereInput!]
  NOT: [TechnologySubscriptionWhereInput!]
}

input TechnologyUpdateDataInput {
  uid: String
  name: String
  image: ImageUpdateOneInput
  color: ColorUpdateOneRequiredInput
}

input TechnologyUpdateInput {
  uid: String
  name: String
  image: ImageUpdateOneInput
  color: ColorUpdateOneRequiredInput
}

input TechnologyUpdateManyDataInput {
  uid: String
  name: String
}

input TechnologyUpdateManyInput {
  create: [TechnologyCreateInput!]
  update: [TechnologyUpdateWithWhereUniqueNestedInput!]
  upsert: [TechnologyUpsertWithWhereUniqueNestedInput!]
  delete: [TechnologyWhereUniqueInput!]
  connect: [TechnologyWhereUniqueInput!]
  disconnect: [TechnologyWhereUniqueInput!]
  deleteMany: [TechnologyScalarWhereInput!]
  updateMany: [TechnologyUpdateManyWithWhereNestedInput!]
}

input TechnologyUpdateManyMutationInput {
  uid: String
  name: String
}

input TechnologyUpdateManyWithWhereNestedInput {
  where: TechnologyScalarWhereInput!
  data: TechnologyUpdateManyDataInput!
}

input TechnologyUpdateWithWhereUniqueNestedInput {
  where: TechnologyWhereUniqueInput!
  data: TechnologyUpdateDataInput!
}

input TechnologyUpsertWithWhereUniqueNestedInput {
  where: TechnologyWhereUniqueInput!
  update: TechnologyUpdateDataInput!
  create: TechnologyCreateInput!
}

input TechnologyWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  uid: String
  uid_not: String
  uid_in: [String!]
  uid_not_in: [String!]
  uid_lt: String
  uid_lte: String
  uid_gt: String
  uid_gte: String
  uid_contains: String
  uid_not_contains: String
  uid_starts_with: String
  uid_not_starts_with: String
  uid_ends_with: String
  uid_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  image: ImageWhereInput
  color: ColorWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [TechnologyWhereInput!]
  OR: [TechnologyWhereInput!]
  NOT: [TechnologyWhereInput!]
}

input TechnologyWhereUniqueInput {
  id: ID
  uid: String
}

type User {
  id: ID!
  uid: String
  name: String!
  email: String!
  nickname: String
  avatar: Image
  lastLoggedIn: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  uid: String
  name: String!
  email: String!
  nickname: String
  avatar: ImageCreateOneInput
  lastLoggedIn: DateTime
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  uid_ASC
  uid_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  nickname_ASC
  nickname_DESC
  lastLoggedIn_ASC
  lastLoggedIn_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  uid: String
  name: String!
  email: String!
  nickname: String
  lastLoggedIn: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  uid: String
  name: String
  email: String
  nickname: String
  avatar: ImageUpdateOneInput
  lastLoggedIn: DateTime
}

input UserUpdateManyMutationInput {
  uid: String
  name: String
  email: String
  nickname: String
  lastLoggedIn: DateTime
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  uid: String
  uid_not: String
  uid_in: [String!]
  uid_not_in: [String!]
  uid_lt: String
  uid_lte: String
  uid_gt: String
  uid_gte: String
  uid_contains: String
  uid_not_contains: String
  uid_starts_with: String
  uid_not_starts_with: String
  uid_ends_with: String
  uid_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  nickname: String
  nickname_not: String
  nickname_in: [String!]
  nickname_not_in: [String!]
  nickname_lt: String
  nickname_lte: String
  nickname_gt: String
  nickname_gte: String
  nickname_contains: String
  nickname_not_contains: String
  nickname_starts_with: String
  nickname_not_starts_with: String
  nickname_ends_with: String
  nickname_not_ends_with: String
  avatar: ImageWhereInput
  lastLoggedIn: DateTime
  lastLoggedIn_not: DateTime
  lastLoggedIn_in: [DateTime!]
  lastLoggedIn_not_in: [DateTime!]
  lastLoggedIn_lt: DateTime
  lastLoggedIn_lte: DateTime
  lastLoggedIn_gt: DateTime
  lastLoggedIn_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  uid: String
}
`
      }
    