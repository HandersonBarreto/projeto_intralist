package com.unigoais.intralist.dto;

public class MonthlyCompletionMetricDTO {

    private Integer month;
    private Long count;

    public MonthlyCompletionMetricDTO() {
    }

    public MonthlyCompletionMetricDTO(Integer month, Long count) {
        this.month = month;
        this.count = count;
    }

    public Integer getMonth() {
        return month;
    }

    public void setMonth(Integer month) {
        this.month = month;
    }

    public Long getCount() {
        return count;
    }

    public void setCount(Long count) {
        this.count = count;
    }
}
