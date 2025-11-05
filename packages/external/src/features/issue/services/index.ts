// export * from './create-issue.service';
// export * from './get-issue.service';
// export * from './get-issues.service';

export const deleteIssue = async () => {};
export const updateIssue = async () => {};

// const now = new Date();
//       const thisMonthStart = startOfMonth(now);
//       const thisMonthEnd = endOfMonth(now);
//       const lastMonthStart = startOfMonth(subMonths(now, 1));
//       const lastMonthEnd = endOfMonth(subMonths(now, 1));

//       const thisMonthTasks = await databases.listDocuments(
//         DATABASE_ID,
//         TASKS_ID,
//         [
//           Query.equal("projectId", projectId),
//           Query.greaterThanEqual("$createdAt", thisMonthStart.toISOString()),
//           Query.lessThanEqual("$createdAt", thisMonthEnd.toISOString())
//         ]
//       );

//       const lastMonthTasks = await databases.listDocuments(
//         DATABASE_ID,
//         TASKS_ID,
//         [
//           Query.equal("projectId", projectId),
//           Query.greaterThanEqual("$createdAt", lastMonthStart.toISOString()),
//           Query.lessThanEqual("$createdAt", lastMonthEnd.toISOString())
//         ]
//       );

//       const taskCount = thisMonthTasks.total;
//       const taskDifference = taskCount - lastMonthTasks.total;

//       const thisMonthAssignedTasks = await databases.listDocuments(
//         DATABASE_ID,
//         TASKS_ID,
//         [
//           Query.equal("projectId", projectId),
//           Query.equal("assigneeId", member.$id),
//           Query.greaterThanEqual("$createdAt", thisMonthStart.toISOString()),
//           Query.lessThanEqual("$createdAt", thisMonthEnd.toISOString())
//         ]
//       );

//       const lastMonthAssignedTasks = await databases.listDocuments(
//         DATABASE_ID,
//         TASKS_ID,
//         [
//           Query.equal("projectId", projectId),
//           Query.equal("assigneeId", member.$id),
//           Query.greaterThanEqual("$createdAt", lastMonthStart.toISOString()),
//           Query.lessThanEqual("$createdAt", lastMonthEnd.toISOString())
//         ]
//       );

//       const assignedTaskCount = thisMonthAssignedTasks.total;
//       const assignedTaskDifference =
//         assignedTaskCount - lastMonthAssignedTasks.total;

//       const thisMonthIncompleteTasks = await databases.listDocuments(
//         DATABASE_ID,
//         TASKS_ID,
//         [
//           Query.equal("projectId", projectId),
//           Query.notEqual("status", TaskStatus.DONE),
//           Query.greaterThanEqual("$createdAt", thisMonthStart.toISOString()),
//           Query.lessThanEqual("$createdAt", thisMonthEnd.toISOString())
//         ]
//       );

//       const lastMonthIncompleteTasks = await databases.listDocuments(
//         DATABASE_ID,
//         TASKS_ID,
//         [
//           Query.equal("projectId", projectId),
//           Query.notEqual("status", TaskStatus.DONE),
//           Query.greaterThanEqual("$createdAt", lastMonthStart.toISOString()),
//           Query.lessThanEqual("$createdAt", lastMonthEnd.toISOString())
//         ]
//       );

//       const incompleteTaskCount = thisMonthIncompleteTasks.total;
//       const incompleteTaskDifference =
//         incompleteTaskCount - lastMonthIncompleteTasks.total;

//       const thisMonthCompletedTasks = await databases.listDocuments(
//         DATABASE_ID,
//         TASKS_ID,
//         [
//           Query.equal("projectId", projectId),
//           Query.equal("status", TaskStatus.DONE),
//           Query.greaterThanEqual("$createdAt", thisMonthStart.toISOString()),
//           Query.lessThanEqual("$createdAt", thisMonthEnd.toISOString())
//         ]
//       );

//       const lastMonthCompletedTasks = await databases.listDocuments(
//         DATABASE_ID,
//         TASKS_ID,
//         [
//           Query.equal("projectId", projectId),
//           Query.equal("status", TaskStatus.DONE),
//           Query.greaterThanEqual("$createdAt", lastMonthStart.toISOString()),
//           Query.lessThanEqual("$createdAt", lastMonthEnd.toISOString())
//         ]
//       );

//       const completedTaskCount = thisMonthCompletedTasks.total;
//       const completedTaskDifference =
//         completedTaskCount - lastMonthCompletedTasks.total;

//       const thisMonthOverdueTasks = await databases.listDocuments(
//         DATABASE_ID,
//         TASKS_ID,
//         [
//           Query.equal("projectId", projectId),
//           Query.notEqual("status", TaskStatus.DONE),
//           Query.lessThan("dueDate", now.toISOString()),
//           Query.greaterThanEqual("$createdAt", thisMonthStart.toISOString()),
//           Query.lessThanEqual("$createdAt", thisMonthEnd.toISOString())
//         ]
//       );

//       const lastMonthOverdueTasks = await databases.listDocuments(
//         DATABASE_ID,
//         TASKS_ID,
//         [
//           Query.equal("projectId", projectId),
//           Query.notEqual("status", TaskStatus.DONE),
//           Query.lessThan("dueDate", now.toISOString()),
//           Query.greaterThanEqual("$createdAt", lastMonthStart.toISOString()),
//           Query.lessThanEqual("$createdAt", lastMonthEnd.toISOString())
//         ]
//       );

//       const overdueTaskCount = thisMonthOverdueTasks.total;
//       const overdueTaskDifference =
//         overdueTaskCount - lastMonthOverdueTasks.total;

//       return c.json({
//         data: {
//           taskCount,
//           taskDifference,
//           assignedTaskCount,
//           assignedTaskDifference,
//           completedTaskCount,
//           completedTaskDifference,
//           incompleteTaskCount,
//           incompleteTaskDifference,
//           overdueTaskCount,
//           overdueTaskDifference,
//         },
//       });
