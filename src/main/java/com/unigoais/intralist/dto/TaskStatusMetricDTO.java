package com.unigoais.intralist.dto;

import com.unigoais.intralist.entities.StatusTarefa;

public class TaskStatusMetricDTO {
    private StatusTarefa status;
    private Long count;

    public TaskStatusMetricDTO() {
    }

    public TaskStatusMetricDTO(StatusTarefa status, Long count) {
        this.status = status;
        this.count = count;
    }

    public StatusTarefa getStatus() {
        return status;
    }

    public void setStatus(StatusTarefa status) {
        this.status = status;
    }

    public Long getCount() {
        return count;
    }

    public void setCount(Long count) {
        this.count = count;
    }
}
