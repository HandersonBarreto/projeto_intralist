package com.unigoais.intralist.dto;

import com.unigoais.intralist.entities.StatusTarefa;

public class MonthlyStatusMetricDTO {

    private Integer month;
    private Long count;
    private String status;

    public MonthlyStatusMetricDTO() {
    }

    public MonthlyStatusMetricDTO(Integer month, Long count, String status) {
        this.month = month;
        this.count = count;
        this.status = status;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}

