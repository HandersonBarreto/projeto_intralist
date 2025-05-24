package com.unigoais.intralist.dto;

import com.unigoais.intralist.entities.StatusProjeto;

public class ProjectStatusMetricDTO {
    private StatusProjeto status;
    private Long count;

    public ProjectStatusMetricDTO() {
    }

    public ProjectStatusMetricDTO(StatusProjeto status, Long count) {
        this.status = status;
        this.count = count;
    }

    public StatusProjeto getStatus() {
        return status;
    }

    public void setStatus(StatusProjeto status) {
        this.status = status;
    }

    public Long getCount() {
        return count;
    }

    public void setCount(Long count) {
        this.count = count;
    }
}
