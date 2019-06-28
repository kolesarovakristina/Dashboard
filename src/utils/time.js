import moment from "moment";

export const getStartOfMonth = date => moment(date).startOf("month");

export const getEndOfMonth = date => moment(date).endOf("month");

export const getStartOfYear = date => moment(date).startOf("year");

export const getEndOfYear = date => moment(date).endOf("year");

export const formatDate = (date, pattern) => moment(date).format(pattern);
